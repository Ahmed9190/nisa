import { describe, it, expect, beforeEach, vi } from 'vitest';
import { JsonProductRepository } from '../json-product-repository';

describe('JsonProductRepository', () => {
  let repo: JsonProductRepository;

  beforeEach(() => {
    repo = new JsonProductRepository();
    vi.resetModules();
  });

  describe('when getAll is called', () => {
    it('should return all products', async () => {
      const products = await repo.getAll();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });
  });

  describe('when getById is called', () => {
    it('should return product for valid ID', async () => {
      const product = await repo.getById('abaya-01');
      expect(product).not.toBeNull();
      expect(product?.id).toBe('abaya-01');
    });

    it('should return null for invalid ID', async () => {
      const product = await repo.getById('invalid-id');
      expect(product).toBeNull();
    });
  });

  describe('when getByCategory is called', () => {
    it('should filter correctly by category', async () => {
      const autumnProducts = await repo.getByCategory('autumn-collection');
      expect(autumnProducts.every(p => p.category === 'autumn-collection')).toBe(true);
      
      const winterProducts = await repo.getByCategory('winter-collection');
      expect(winterProducts.every(p => p.category === 'winter-collection')).toBe(true);
    });
  });

  describe('when getFeatured is called', () => {
    it('should return only featured products', async () => {
      const featured = await repo.getFeatured();
      expect(featured.every(p => p.featured === true)).toBe(true);
    });
  });

  describe('when search is called', () => {
    it('should match name', async () => {
      const results = await repo.search('Onyx');
      expect(results.some(p => p.name.includes('Onyx'))).toBe(true);
    });

    it('should match description', async () => {
      const results = await repo.search('evening');
      expect(results.some(p => p.description.toLowerCase().includes('evening'))).toBe(true);
    });

    it('should match category', async () => {
      const results = await repo.search('autumn');
      expect(results.every(p => p.category === 'autumn-collection')).toBe(true);
    });

    it('should return empty array for no matches', async () => {
      const results = await repo.search('xyznonexistent');
      expect(results).toEqual([]);
    });
  });

  describe('when getAllIds is called', () => {
    it('should return all product IDs', async () => {
      const ids = await repo.getAllIds();
      expect(Array.isArray(ids)).toBe(true);
      expect(ids.length).toBeGreaterThan(0);
      expect(ids).toContain('abaya-01');
    });
  });
});