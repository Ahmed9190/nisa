import { readFile, mkdir, writeFile, rename, rm, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
const detailsSchema = z.object({
  fabric: z.string().trim().min(1, "Fabric is required"),
  fit: z.string().trim().min(1, "Fit is required"),
  care: z.string().trim().min(1, "Care instructions are required")
});
const colorSchema = z.object({
  name: z.string().trim().min(1, "Color name is required"),
  nameAr: z.string().trim().optional(),
  code: z.string().trim().regex(HEX_COLOR_PATTERN, "Color must use #RRGGBB format"),
  images: z.array(z.string().trim().startsWith("/", "Image must be a valid relative URL")).min(1, "At least one image is required"),
  inStock: z.boolean().default(true)
});
const productInputSchema = z.object({
  id: z.string().trim().min(1).optional(),
  name: z.string().trim().min(1, "English name is required"),
  nameAr: z.string().trim().optional(),
  price: z.coerce.number().nonnegative("Price must be zero or greater"),
  priceBefore: z.coerce.number().nonnegative("Price before must be zero or greater").optional(),
  currency: z.string().trim().min(1).default("EGP"),
  description: z.string().trim().min(1, "English description is required"),
  descriptionAr: z.string().trim().optional(),
  details: detailsSchema,
  detailsAr: detailsSchema.partial().optional(),
  sizes: z.array(z.string().trim().min(1, "Size cannot be empty")).min(1, "At least one size is required"),
  colors: z.array(colorSchema).min(1, "At least one color is required"),
  category: z.string().trim().min(1, "Category is required"),
  type: z.string().trim().optional(),
  featured: z.boolean().default(false),
  inStock: z.boolean().default(true),
  sku: z.string().trim().min(1, "SKU is required"),
  comingSoon: z.boolean().default(false),
  hidden: z.boolean().default(false)
}).superRefine((value, ctx) => {
  if (value.priceBefore !== void 0 && value.priceBefore <= value.price) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["priceBefore"],
      message: "Price before must be greater than price"
    });
  }
});
function parseProductForm(formData) {
  const raw = formData.get("product");
  if (raw && typeof raw === "string") {
    return productInputSchema.parse(JSON.parse(raw));
  }
  return productInputSchema.parse({
    id: formData.get("id") || void 0,
    name: formData.get("name") || "",
    nameAr: formData.get("nameAr") || "",
    price: formData.get("price") || 0,
    priceBefore: formData.get("priceBefore") || void 0,
    currency: formData.get("currency") || "EGP",
    description: formData.get("description") || "",
    descriptionAr: formData.get("descriptionAr") || "",
    details: {
      fabric: formData.get("details.fabric") || "",
      fit: formData.get("details.fit") || "",
      care: formData.get("details.care") || ""
    },
    detailsAr: {
      fabric: formData.get("detailsAr.fabric") || "",
      fit: formData.get("detailsAr.fit") || "",
      care: formData.get("detailsAr.care") || ""
    },
    sizes: formData.getAll("sizes").map(String).filter(Boolean),
    colors: formData.getAll("colors").map((value) => JSON.parse(String(value))),
    category: formData.get("category") || "",
    featured: formData.get("featured") === "on",
    inStock: formData.get("inStock") === "on",
    sku: formData.get("sku") || "",
    comingSoon: formData.get("comingSoon") === "on",
    hidden: formData.get("hidden") === "on"
  });
}
function validateProductInput(input) {
  return productInputSchema.parse(input);
}
function formatZodErrors(error) {
  if (!(error instanceof z.ZodError)) {
    return { form: error instanceof Error ? error.message : "Invalid request" };
  }
  return error.issues.reduce((errors, issue) => {
    const path = issue.path.length > 0 ? issue.path.join(".") : "form";
    errors[path] = issue.message;
    return errors;
  }, {});
}
function toProduct(input, now = /* @__PURE__ */ new Date()) {
  const timestamp = now.toISOString();
  return {
    ...input,
    id: input.id || slugify(input.name),
    nameAr: input.nameAr || input.name,
    descriptionAr: input.descriptionAr || input.description,
    detailsAr: input.detailsAr || input.details,
    currency: input.currency || "EGP",
    featured: Boolean(input.featured),
    inStock: Boolean(input.inStock),
    comingSoon: Boolean(input.comingSoon),
    hidden: Boolean(input.hidden),
    createdAt: input.id ? void 0 : timestamp,
    updatedAt: timestamp
  };
}
function slugify(value) {
  const slug = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return slug || "product";
}
function getFirstImageUrl(product) {
  return product.colors.find((color) => color.images.length > 0)?.images[0] || null;
}
function normalizeColorName(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

function resolveProjectRoot() {
  const url = fileURLToPath(import.meta.url);
  return url.includes("/dist/") ? process.cwd() : path.resolve(url, "../../..");
}
const projectRoot = resolveProjectRoot();
const defaultProductsPath = path.join(projectRoot, "src/data/products.json");
const defaultImageRoot = path.join(projectRoot, "public/images/products");
const cachedProducts = /* @__PURE__ */ new Map();
let writeQueue = Promise.resolve();
class ProductStore {
  constructor(options = {}) {
    this.productsPath = options.productsPath || options.enPath || defaultProductsPath;
    this.imageRoot = options.imageRoot || defaultImageRoot;
  }
  async getAll() {
    return this.readProducts();
  }
  async getById(id) {
    const products = await this.readProducts();
    return products.find((product) => product.id === id) || null;
  }
  async getByCategory(category) {
    const products = await this.readProducts();
    return products.filter((product) => product.category === category);
  }
  async getFeatured() {
    const products = await this.readProducts();
    return products.filter((product) => product.featured);
  }
  async search(query) {
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
        product.sku
      ].filter(Boolean).join(" ").toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }
  async getAllIds() {
    const products = await this.readProducts();
    return products.map((product) => product.id);
  }
  async create(productData) {
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
  async update(id, productData) {
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
  async delete(id) {
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
  async deleteImagesForProduct(productId) {
    await this.deleteImagesByPrefix(`${slugify(productId)}-`);
  }
  async deleteImagesForColor(productId, colorName) {
    await this.deleteImagesByPrefix(`${slugify(productId)}-${normalizeColorName(colorName)}-`);
  }
  async uploadImagePath(productId, colorName, index, fileName) {
    const extension = path.extname(fileName).toLowerCase();
    const safeName = `${slugify(productId)}-${normalizeColorName(colorName)}-${index + 1}${extension}`;
    return `/images/products/${safeName}`;
  }
  async readProducts() {
    const cacheKey = this.productsPath;
    if (cachedProducts.has(cacheKey)) {
      return cachedProducts.get(cacheKey);
    }
    const filePath = this.productsPath;
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    const products = parsed.products || [];
    cachedProducts.set(cacheKey, products);
    return products;
  }
  async writeProducts(products) {
    await this.atomicWriteJson(this.productsPath, { products });
  }
  async atomicWriteJson(filePath, data) {
    await mkdir(path.dirname(filePath), { recursive: true });
    const tempPath = `${filePath}.${process.pid}.${Date.now()}.tmp`;
    try {
      await writeFile(tempPath, `${JSON.stringify(data, null, 2)}
`, "utf8");
      await rename(tempPath, filePath);
    } finally {
      await rm(tempPath, { force: true });
    }
  }
  async withSequentialWrite(operation) {
    writeQueue = writeQueue.then(operation, operation);
    return writeQueue;
  }
  uniqueId(id, products) {
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
  async deleteImagesByPrefix(prefix) {
    try {
      await mkdir(this.imageRoot, { recursive: true });
      const files = await readdir(this.imageRoot);
      await Promise.all(files.filter((file) => file.startsWith(prefix)).map((file) => this.safeRemove(path.join(this.imageRoot, file))));
    } catch (error) {
      console.warn(`Failed to clean uploaded images for ${prefix}`, error);
    }
  }
  async safeRemove(filePath) {
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
const productStore = new ProductStore();
function clearProductCache(filePath = defaultProductsPath) {
  cachedProducts.delete(filePath);
}
function mergeProductData(existing, input) {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
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
    updatedAt: timestamp
  };
}

export { ProductStore as P, parseProductForm as a, clearProductCache as c, formatZodErrors as f, getFirstImageUrl as g, productStore as p, slugify as s, validateProductInput as v };
