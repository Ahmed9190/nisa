import type { Product } from '../../types';

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
  getByCategory(category: string): Promise<Product[]>;
  getFeatured(): Promise<Product[]>;
  search(query: string): Promise<Product[]>;
  getAllIds(): Promise<string[]>;
  create(productData: Partial<Product>): Promise<Product>;
  update(id: string, productData: Partial<Product>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}