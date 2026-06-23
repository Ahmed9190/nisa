import { mkdir, readdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Product } from '../../types';
import type { ProductRepository } from '../repositories/product-repository';
import {
  getFirstImageUrl,
  normalizeColorName,
  slugify,
  toProduct,
  validateProductInput,
  type ProductInput,
} from './validation';

interface JsonProductFile {
  products: Product[];
}

interface ProductStoreOptions {
  productsPath?: string;
  enPath?: string; // fallback
  arPath?: string; // legacy (not used)
  imageRoot?: string;
}

function resolveProjectRoot(): string {
  const url = fileURLToPath(import.meta.url);
  return url.includes('/dist/') ? process.cwd() : path.resolve(url, '../../..');
}

const projectRoot = resolveProjectRoot();
const defaultProductsPath = path.join(projectRoot, 'src/data/products.json');
const defaultImageRoot = path.join(projectRoot, 'public/images/products');
const cachedProducts = new Map<string, Product[]>();
let writeQueue: Promise<void> = Promise.resolve();

export class ProductStore implements ProductRepository {
  private readonly productsPath: string;
  private readonly imageRoot: string;

  constructor(options: ProductStoreOptions = {}) {
    this.productsPath = options.productsPath || options.enPath || defaultProductsPath;
    this.imageRoot = options.imageRoot || defaultImageRoot;
  }

  async getAll(): Promise<Product[]> {
    return this.readProducts();
  }

  async getById(id: string): Promise<Product | null> {
    const products = await this.readProducts();
    return products.find((product) => product.id === id) || null;
  }

  async getByCategory(category: string): Promise<Product[]> {
    const products = await this.readProducts();
    return products.filter((product) => product.category === category);
  }

  async getFeatured(): Promise<Product[]> {
    const products = await this.readProducts();
    return products.filter((product) => product.featured);
  }

  async search(query: string): Promise<Product[]> {
    const products = await this.readProducts();
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return products.filter((product) => {
      const haystack = [
        product.name,
        product.nameAr,
        product.description,
        product.descriptionAr,
        product.category,
        product.sku,
      ].filter(Boolean).join(' ').toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }

  async getAllIds(): Promise<string[]> {
    const products = await this.readProducts();
    return products.map((product) => product.id);
  }

  async create(productData: ProductInput | Partial<Product>): Promise<Product> {
    return this.withSequentialWrite(async () => {
      const input = validateProductInput(productData);
      const products = await this.readProducts();
      const product = toProduct(input);
      product.id = this.uniqueId(product.id, products);

      products.push(product);

      await this.writeProducts(products);
      clearProductCache(this.productsPath);

      return product;
    });
  }

  async update(id: string, productData: ProductInput | Partial<Product>): Promise<Product | null> {
    return this.withSequentialWrite(async () => {
      const input = validateProductInput(productData);
      const products = await this.readProducts();
      const existing = products.find((product) => product.id === id);

      if (!existing) {
        return null;
      }

      const removedColors = existing.colors.filter((color) => !input.colors.some((nextColor) => nextColor.name === color.name));
      for (const color of removedColors) {
        await this.deleteImagesForColor(id, color.name);
      }

      const updated = mergeProductData(existing, input);
      const updatedProducts = products.map((product) => product.id === id ? updated : product);

      await this.writeProducts(updatedProducts);
      clearProductCache(this.productsPath);

      return updated;
    });
  }

  async delete(id: string): Promise<boolean> {
    return this.withSequentialWrite(async () => {
      const products = await this.readProducts();
      const exists = products.some((product) => product.id === id);

      if (!exists) {
        return false;
      }

      await this.deleteImagesForProduct(id);
      const updatedProducts = products.filter((product) => product.id !== id);

      await this.writeProducts(updatedProducts);
      clearProductCache(this.productsPath);

      return true;
    });
  }

  async deleteImagesForProduct(productId: string): Promise<void> {
    await this.deleteImagesByPrefix(`${slugify(productId)}-`);
  }

  async deleteImagesForColor(productId: string, colorName: string): Promise<void> {
    await this.deleteImagesByPrefix(`${slugify(productId)}-${normalizeColorName(colorName)}-`);
  }

  async uploadImagePath(productId: string, colorName: string, index: number, fileName: string): Promise<string> {
    const extension = path.extname(fileName).toLowerCase();
    const safeName = `${slugify(productId)}-${normalizeColorName(colorName)}-${index + 1}${extension}`;
    return `/images/products/${safeName}`;
  }

  private async readProducts(): Promise<Product[]> {
    const cacheKey = this.productsPath;

    if (cachedProducts.has(cacheKey)) {
      return cachedProducts.get(cacheKey)!;
    }

    const filePath = this.productsPath;
    const raw = await readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw) as JsonProductFile;
    const products = parsed.products || [];
    cachedProducts.set(cacheKey, products);

    return products;
  }

  private async writeProducts(products: Product[]): Promise<void> {
    await this.atomicWriteJson(this.productsPath, { products });
  }

  private async atomicWriteJson(filePath: string, data: JsonProductFile): Promise<void> {
    await mkdir(path.dirname(filePath), { recursive: true });
    const tempPath = `${filePath}.${process.pid}.${Date.now()}.tmp`;

    try {
      await writeFile(tempPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
      await rename(tempPath, filePath);
    } finally {
      await rm(tempPath, { force: true });
    }
  }

  private async withSequentialWrite<T>(operation: () => Promise<T>): Promise<T> {
    writeQueue = writeQueue.then(operation, operation);
    return writeQueue;
  }

  private uniqueId(id: string, products: Product[]): string {
    const ids = new Set(products.map((product) => product.id));

    if (!ids.has(id)) {
      return id;
    }

    let index = 2;
    while (ids.has(`${id}-${index}`)) {
      index += 1;
    }

    return `${id}-${index}`;
  }

  private async deleteImagesByPrefix(prefix: string): Promise<void> {
    try {
      await mkdir(this.imageRoot, { recursive: true });
      const files = await readdir(this.imageRoot);

      await Promise.all(files
        .filter((file) => file.startsWith(prefix))
        .map((file) => this.safeRemove(path.join(this.imageRoot, file))));
    } catch (error) {
      console.warn(`Failed to clean uploaded images for ${prefix}`, error);
    }
  }

  private async safeRemove(filePath: string): Promise<void> {
    try {
      const stats = await stat(filePath);
      if (stats.isFile()) {
        await rm(filePath, { force: true });
      }
    } catch (error) {
      console.warn(`Failed to remove uploaded image ${filePath}`, error);
    }
  }
}

export const productStore = new ProductStore();

export function clearProductCache(filePath = defaultProductsPath): void {
  cachedProducts.delete(filePath);
}

function mergeProductData(existing: Product, input: ProductInput): Product {
  const timestamp = new Date().toISOString();

  return {
    ...existing,
    ...input,
    id: existing.id,
    nameAr: input.nameAr || input.name,
    descriptionAr: input.descriptionAr || input.description,
    detailsAr: input.detailsAr || input.details,
    currency: input.currency || existing.currency,
    featured: Boolean(input.featured),
    inStock: Boolean(input.inStock),
    comingSoon: Boolean(input.comingSoon),
    hidden: Boolean(input.hidden),
    createdAt: existing.createdAt,
    updatedAt: timestamp,
  };
}

export function getFirstProductImageUrl(product: Product): string | null {
  return getFirstImageUrl(product);
}

