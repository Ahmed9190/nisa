import type { Product } from '../types';
import productsData from '../data/products.json';

// Type the products data
type ProductsData = {
  products: Product[];
};

// Cast the imported JSON to the typed structure
const typedProducts = productsData as ProductsData;

// Export the typed products
export const products = typedProducts.products;

// Helper function to find a product by ID
export const findProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

// Helper function to get all products
export const getAllProducts = (): Product[] => {
  return [...products];
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
