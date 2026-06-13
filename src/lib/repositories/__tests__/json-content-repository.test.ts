import { describe, it, expect, beforeEach, vi } from 'vitest';
import { JsonContentRepository } from '../json-content-repository';

describe('JsonContentRepository', () => {
  let repo: JsonContentRepository;

  beforeEach(() => {
    repo = new JsonContentRepository();
    vi.resetModules();
  });

  describe('when getHomeContent is called', () => {
    it('should return home content with hero and featuredCollection', async () => {
      const home = await repo.getHomeContent();
      expect(home).toHaveProperty('hero');
      expect(home).toHaveProperty('featuredCollection');
      expect(home.hero).toHaveProperty('title');
      expect(home.hero).toHaveProperty('subtitle');
      expect(home.hero).toHaveProperty('backgroundImage');
      expect(home.featuredCollection).toHaveProperty('title');
      expect(home.featuredCollection).toHaveProperty('buttonText');
      expect(home.featuredCollection).toHaveProperty('featuredProductIds');
    });
  });

  describe('when getAboutContent is called', () => {
    it('should return about content', async () => {
      const about = await repo.getAboutContent();
      expect(about).toHaveProperty('title');
      expect(about).toHaveProperty('content');
      expect(typeof about.title).toBe('string');
      expect(typeof about.content).toBe('string');
    });
  });

  describe('when getContactContent is called', () => {
    it('should return contact content', async () => {
      const contact = await repo.getContactContent();
      expect(contact).toHaveProperty('title');
      expect(typeof contact.title).toBe('string');
    });
  });

  describe('when getShopContent is called', () => {
    it('should return shop content', async () => {
      const shop = await repo.getShopContent();
      expect(shop).toHaveProperty('title');
      expect(typeof shop.title).toBe('string');
    });
  });

  describe('when getAllContent is called', () => {
    it('should return all content sections', async () => {
      const content = await repo.getAllContent();
      expect(content).toHaveProperty('home');
      expect(content).toHaveProperty('about');
      expect(content).toHaveProperty('contact');
      expect(content).toHaveProperty('shop');
    });
  });
});