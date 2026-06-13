import type { ProductRepository } from './product-repository';
import type { Product } from '../../types';

let cachedProducts: Product[] | null = null;

async function loadProducts(): Promise<Product[]> {
  if (cachedProducts) {
    return cachedProducts;
  }
  
  const module = await import('../../data/products.json');
  cachedProducts = module.default?.products || module.products || [];
  return cachedProducts;
}

export class JsonProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    return loadProducts();
  }

  async getById(id: string): Promise<Product | null> {
    const products = await loadProducts();
    return products.find(p => p.id === id) || null;
  }

  async getByCategory(category: string): Promise<Product[]> {
    const products = await loadProducts();
    return products.filter(p => p.category === category);
  }

  async getFeatured(): Promise<Product[]> {
    const products = await loadProducts();
    return products.filter(p => p.featured);
  }

  async search(query: string): Promise<Product[]> {
    const products = await loadProducts();
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    );
  }

  async getAllIds(): Promise<string[]> {
    const products = await loadProducts();
    return products.map(p => p.id);
  }
}