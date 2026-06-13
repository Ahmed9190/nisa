import type { ProductRepository } from './product-repository';
import type { Product } from '../../types';
import type { Locale } from '../../i18n';

const cachedProducts = new Map<Locale, Product[]>();

async function loadProducts(locale: Locale): Promise<Product[]> {
  if (cachedProducts.has(locale)) {
    return cachedProducts.get(locale)!;
  }
  
  let products: Product[];
  if (locale === 'ar') {
    const module = await import('../../data/products-ar.json');
    products = module.default?.products || module.products || [];
  } else {
    const module = await import('../../data/products-en.json');
    products = module.default?.products || module.products || [];
  }
  
  cachedProducts.set(locale, products);
  return products;
}

export class JsonProductRepository implements ProductRepository {
  private locale: Locale;

  constructor(locale: Locale = 'en') {
    this.locale = locale;
  }

  async getAll(): Promise<Product[]> {
    return loadProducts(this.locale);
  }

  async getById(id: string): Promise<Product | null> {
    const products = await loadProducts(this.locale);
    return products.find(p => p.id === id) || null;
  }

  async getByCategory(category: string): Promise<Product[]> {
    const products = await loadProducts(this.locale);
    return products.filter(p => p.category === category);
  }

  async getFeatured(): Promise<Product[]> {
    const products = await loadProducts(this.locale);
    return products.filter(p => p.featured);
  }

  async search(query: string): Promise<Product[]> {
    const products = await loadProducts(this.locale);
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );
  }

  async getAllIds(): Promise<string[]> {
    const products = await loadProducts(this.locale);
    return products.map(p => p.id);
  }
}