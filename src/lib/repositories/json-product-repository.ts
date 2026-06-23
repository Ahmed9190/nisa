import type { ProductRepository } from './product-repository';
import type { Product } from '../../types';
import type { Locale } from '../../i18n';
import { ProductStore, clearProductCache } from '../product-store';

const cachedProducts = new Map<Locale, Product[]>();
const productStore = new ProductStore();

function toLocalizedProduct(product: Product, locale: Locale): Product {
  if (locale === 'ar') {
    return {
      ...product,
      name: product.nameAr || product.name,
      description: product.descriptionAr || product.description,
      details: product.detailsAr || product.details,
      colors: product.colors.map((color) => ({
        ...color,
        name: color.nameAr || color.name,
      })),
    };
  }
  return product;
}

async function loadProducts(locale: Locale): Promise<Product[]> {
  if (cachedProducts.has(locale)) {
    return cachedProducts.get(locale)!;
  }
  
  const module = await import('../../data/products.json');
  const rawProducts = module.default?.products || module.products || [];
  const products = rawProducts.map((p) => toLocalizedProduct(p, locale));
  
  cachedProducts.set(locale, products);
  return products;
}

export class JsonProductRepository implements ProductRepository {
  private locale: Locale;

  constructor(locale: Locale = 'en') {
    this.locale = locale;
  }

  async getAll(): Promise<Product[]> {
    const products = await loadProducts(this.locale);
    return products.filter(p => !p.hidden);
  }

  async getById(id: string): Promise<Product | null> {
    const products = await loadProducts(this.locale);
    const product = products.find(p => p.id === id) || null;
    return (product && !product.hidden) ? product : null;
  }

  async getByCategory(category: string): Promise<Product[]> {
    const products = await loadProducts(this.locale);
    return products.filter(p => p.category === category && !p.hidden);
  }

  async getFeatured(): Promise<Product[]> {
    const products = await loadProducts(this.locale);
    return products.filter(p => p.featured && !p.hidden);
  }

  async search(query: string): Promise<Product[]> {
    const products = await loadProducts(this.locale);
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      !p.hidden && (
        p.name.toLowerCase().includes(lowerQuery) ||
        p.nameAr?.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.descriptionAr?.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
      )
    );
  }

  async getAllIds(): Promise<string[]> {
    const products = await loadProducts(this.locale);
    return products.filter(p => !p.hidden).map(p => p.id);
  }

  async create(productData: Parameters<ProductRepository['create']>[0]): Promise<Product> {
    const product = await productStore.create(productData);
    clearProductCache();
    return product;
  }

  async update(id: string, productData: Parameters<ProductRepository['update']>[1]): Promise<Product | null> {
    const product = await productStore.update(id, productData);
    clearProductCache();
    return product;
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await productStore.delete(id);
    clearProductCache();
    return deleted;
  }
}