import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { ProductStore } from '../product-store';

const TEST_EN = JSON.stringify({
  products: [
    { id: 'p1', name: 'Product One', price: 100, currency: 'EGP', description: 'Desc', details: { fabric: 'Linen', fit: 'Relaxed', care: 'Hand wash' }, sizes: ['One Size'], colors: [{ name: 'Black', code: '#000000', images: ['/img/a.jpg'], inStock: true }], category: 'cat1', featured: false, inStock: true, sku: 'SKU1' },
    { id: 'p2', name: 'Product Two', price: 200, currency: 'EGP', description: 'Desc', details: { fabric: 'Cotton', fit: 'Slim', care: 'Dry clean' }, sizes: ['One Size'], colors: [{ name: 'White', code: '#ffffff', images: ['/img/b.jpg'], inStock: true }], category: 'cat2', featured: true, inStock: false, sku: 'SKU2' },
  ],
}, null, 2);

const TEST_AR = JSON.stringify({
  products: [
    { id: 'p1', name: 'منتج واحد', price: 100, currency: 'EGP', description: 'وصف', details: { fabric: 'كتان', fit: 'واسع', care: 'غسيل يدوي' }, sizes: ['مقاس واحد'], colors: [{ name: 'أسود', code: '#000000', images: ['/img/a.jpg'], inStock: true }], category: 'تصنيف1', featured: false, inStock: true, sku: 'SKU1' },
  ],
}, null, 2);

let tmpDir: string;
let store: ProductStore;

beforeEach(async () => {
  tmpDir = path.join(tmpdir(), `product-store-test-${Date.now()}`);
  await mkdir(tmpDir, { recursive: true });

  const enPath = path.join(tmpDir, 'products-en.json');
  const arPath = path.join(tmpDir, 'products-ar.json');
  await writeFile(enPath, TEST_EN, 'utf8');
  await writeFile(arPath, TEST_AR, 'utf8');

  store = new ProductStore({ enPath, arPath });
});

afterEach(async () => {
  await rm(tmpDir, { recursive: true, force: true });
});

describe('ProductStore', () => {
  describe('when getAll is called', () => {
    it('should return all products', async () => {
      const products = await store.getAll();
      expect(products).toHaveLength(2);
      expect(products[0].id).toBe('p1');
    });
  });

  describe('when getById is called', () => {
    it('should return product by ID', async () => {
      const product = await store.getById('p1');
      expect(product).not.toBeNull();
      expect(product!.id).toBe('p1');
    });

    it('should return null for invalid ID', async () => {
      const product = await store.getById('nonexistent');
      expect(product).toBeNull();
    });
  });

  describe('when getByCategory is called', () => {
    it('should filter by category', async () => {
      const products = await store.getByCategory('cat1');
      expect(products).toHaveLength(1);
      expect(products[0].id).toBe('p1');
    });
  });

  describe('when getFeatured is called', () => {
    it('should return only featured products', async () => {
      const featured = await store.getFeatured();
      expect(featured).toHaveLength(1);
      expect(featured[0].id).toBe('p2');
    });
  });

  describe('when search is called', () => {
    it('should match by name', async () => {
      const results = await store.search('Product One');
      expect(results).toHaveLength(1);
    });

    it('should return empty for no match', async () => {
      const results = await store.search('nonexistent');
      expect(results).toHaveLength(0);
    });
  });

  describe('when create is called', () => {
    it('should create a new product', async () => {
      const created = await store.create({
        name: 'New Product',
        price: 50,
        currency: 'EGP',
        description: 'New desc',
        details: { fabric: 'F', fit: 'F', care: 'C' },
        sizes: ['M'],
        colors: [{ name: 'Red', code: '#ff0000', images: ['/img/r.jpg'], inStock: true }],
        category: 'cat1',
        featured: false,
        inStock: true,
        sku: 'SKU-NEW',
      });

      expect(created.id).toBe('new-product');
      expect(created.price).toBe(50);

      const all = await store.getAll();
      expect(all).toHaveLength(3);
    });

    it('should create a hidden product', async () => {
      const created = await store.create({
        name: 'Hidden Product',
        price: 50,
        currency: 'EGP',
        description: 'New desc',
        details: { fabric: 'F', fit: 'F', care: 'C' },
        sizes: ['M'],
        colors: [{ name: 'Red', code: '#ff0000', images: ['/img/r.jpg'], inStock: true }],
        category: 'cat1',
        featured: false,
        inStock: true,
        sku: 'SKU-HIDDEN',
        hidden: true,
      });

      expect(created.id).toBe('hidden-product');
      expect(created.hidden).toBe(true);

      const all = await store.getAll();
      expect(all.find((p) => p.id === 'hidden-product')?.hidden).toBe(true);
    });

    it('should add product to the single JSON file with all translations', async () => {
      await store.create({
        name: 'Bilingual Test',
        nameAr: 'اختبار',
        price: 30,
        currency: 'EGP',
        description: 'Desc',
        descriptionAr: 'وصف',
        details: { fabric: 'F', fit: 'F', care: 'C' },
        sizes: ['One'],
        colors: [{ name: 'Green', code: '#00ff00', images: ['/img/g.jpg'], inStock: true }],
        category: 'cat1',
        featured: false,
        inStock: true,
        sku: 'SKU-BI',
      });

      const all = await store.getAll();
      const created = all.find((p) => p.id === 'bilingual-test');
      expect(created?.name).toBe('Bilingual Test');
      expect(created?.nameAr).toBe('اختبار');
      expect(created?.descriptionAr).toBe('وصف');
    });
  });

  describe('when update is called', () => {
    it('should update an existing product', async () => {
      const updated = await store.update('p1', {
        name: 'Updated One',
        price: 150,
        currency: 'EGP',
        description: 'Updated',
        details: { fabric: 'F', fit: 'F', care: 'C' },
        sizes: ['M'],
        colors: [{ name: 'Black', code: '#000000', images: ['/img/a.jpg'], inStock: true }],
        category: 'cat1',
        featured: false,
        inStock: true,
        sku: 'SKU1',
      });

      expect(updated).not.toBeNull();
      expect(updated!.name).toBe('Updated One');
      expect(updated!.price).toBe(150);
    });

    it('should update a product to be hidden', async () => {
      const updated = await store.update('p1', {
        name: 'Product One',
        price: 100,
        currency: 'EGP',
        description: 'Desc',
        details: { fabric: 'Linen', fit: 'Relaxed', care: 'Hand wash' },
        sizes: ['One Size'],
        colors: [{ name: 'Black', code: '#000000', images: ['/img/a.jpg'], inStock: true }],
        category: 'cat1',
        featured: false,
        inStock: true,
        sku: 'SKU1',
        hidden: true,
      });

      expect(updated).not.toBeNull();
      expect(updated!.hidden).toBe(true);
    });

    it('should return null for nonexistent product', async () => {
      const result = await store.update('nonexistent', {
        name: 'Noop',
        price: 0,
        currency: 'EGP',
        description: 'No',
        details: { fabric: 'F', fit: 'F', care: 'C' },
        sizes: ['M'],
        colors: [{ name: 'X', code: '#000000', images: ['/img/x.jpg'], inStock: true }],
        category: 'cat',
        featured: false,
        inStock: true,
        sku: 'SKU',
      });
      expect(result).toBeNull();
    });
  });

  describe('when delete is called', () => {
    it('should delete an existing product', async () => {
      const deleted = await store.delete('p1');
      expect(deleted).toBe(true);

      const all = await store.getAll();
      expect(all).toHaveLength(1);
      expect(all[0].id).toBe('p2');
    });

    it('should return false for nonexistent product', async () => {
      const deleted = await store.delete('nonexistent');
      expect(deleted).toBe(false);
    });
  });
});
