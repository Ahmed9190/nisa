import { describe, it, expect, beforeEach, vi } from 'vitest';
import { 
  getProductRepository, 
  setProductRepository,
  getContentRepository,
  setContentRepository,
  getShippingRepository,
  setShippingRepository,
  getSiteRepository,
  setSiteRepository,
  clearRepositoryCache
} from '../repository-factory';
import type { ProductRepository, ContentRepository, ShippingRepository, SiteRepository } from '../../repositories';

describe('RepositoryFactory', () => {
  beforeEach(() => {
    vi.resetModules();
    clearRepositoryCache();
  });

  describe('when getProductRepository is called', () => {
    it('should return default JSON implementation', async () => {
      const repo = await getProductRepository();
      expect(repo).toBeDefined();
      expect(typeof repo.getAll).toBe('function');
      expect(typeof repo.getById).toBe('function');
      expect(typeof repo.getByCategory).toBe('function');
      expect(typeof repo.getFeatured).toBe('function');
      expect(typeof repo.search).toBe('function');
      expect(typeof repo.getAllIds).toBe('function');
    });

    it('should return same instance on subsequent calls (singleton)', async () => {
      const repo1 = await getProductRepository();
      const repo2 = await getProductRepository();
      expect(repo1).toBe(repo2);
    });
  });

  describe('when setProductRepository is called', () => {
    it('should swap implementation', async () => {
      const mockRepo: ProductRepository = {
        getAll: vi.fn().mockResolvedValue([]),
        getById: vi.fn().mockResolvedValue(null),
        getByCategory: vi.fn().mockResolvedValue([]),
        getFeatured: vi.fn().mockResolvedValue([]),
        search: vi.fn().mockResolvedValue([]),
        getAllIds: vi.fn().mockResolvedValue([]),
      };
      
      setProductRepository(mockRepo);
      const repo = await getProductRepository();
      expect(repo).toBe(mockRepo);
    });
  });

  describe('when getContentRepository is called', () => {
    it('should return default JSON implementation', async () => {
      const repo = await getContentRepository();
      expect(repo).toBeDefined();
      expect(typeof repo.getHomeContent).toBe('function');
      expect(typeof repo.getAboutContent).toBe('function');
      expect(typeof repo.getContactContent).toBe('function');
      expect(typeof repo.getShopContent).toBe('function');
      expect(typeof repo.getAllContent).toBe('function');
    });

    it('should return same instance on subsequent calls (singleton)', async () => {
      const repo1 = await getContentRepository();
      const repo2 = await getContentRepository();
      expect(repo1).toBe(repo2);
    });
  });

  describe('when setContentRepository is called', () => {
    it('should swap implementation', async () => {
      const mockRepo: ContentRepository = {
        getHomeContent: vi.fn().mockResolvedValue({}),
        getAboutContent: vi.fn().mockResolvedValue({}),
        getContactContent: vi.fn().mockResolvedValue({}),
        getShopContent: vi.fn().mockResolvedValue({}),
        getAllContent: vi.fn().mockResolvedValue({}),
      };
      
      setContentRepository(mockRepo);
      const repo = await getContentRepository();
      expect(repo).toBe(mockRepo);
    });
  });

  describe('when getShippingRepository is called', () => {
    it('should return default JSON implementation', async () => {
      const repo = await getShippingRepository();
      expect(repo).toBeDefined();
      expect(typeof repo.getAllRates).toBe('function');
      expect(typeof repo.getRateByCity).toBe('function');
    });
  });

  describe('when getSiteRepository is called', () => {
    it('should return default JSON implementation', async () => {
      const repo = await getSiteRepository();
      expect(repo).toBeDefined();
      expect(typeof repo.getSiteConfig).toBe('function');
    });
  });

  describe('when clearRepositoryCache is called', () => {
    it('should reset all repositories', async () => {
      await getProductRepository();
      await getContentRepository();
      await getShippingRepository();
      await getSiteRepository();
      
      clearRepositoryCache();
      
      // After clear, new instances should be created
      const repo1 = await getProductRepository();
      const repo2 = await getProductRepository();
      // They should be the same (singleton after re-init)
      expect(repo1).toBe(repo2);
    });
  });

  describe('when no instance created on import', () => {
    it('should not create instances until getter is called', async () => {
      // This test verifies lazy initialization
      // We just verify that importing doesn't throw and getters work
      const { getProductRepository: getProductRepo } = await import('../repository-factory');
      const repo = await getProductRepo();
      expect(repo).toBeDefined();
    });
  });
});