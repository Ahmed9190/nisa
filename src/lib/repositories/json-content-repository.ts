import type { ContentRepository } from './content-repository';
import type { Content } from '../../types';

let cachedContent: Content | null = null;

async function loadContent(): Promise<Content> {
  if (cachedContent) {
    return cachedContent;
  }
  
  const module = await import('../../data/content.json');
  cachedContent = module.default || module;
  return cachedContent;
}

export class JsonContentRepository implements ContentRepository {
  async getHomeContent(): Promise<Content['home']> {
    const content = await loadContent();
    return content.home;
  }

  async getAboutContent(): Promise<Content['about']> {
    const content = await loadContent();
    return content.about;
  }

  async getContactContent(): Promise<Content['contact']> {
    const content = await loadContent();
    return content.contact;
  }

  async getShopContent(): Promise<Content['shop']> {
    const content = await loadContent();
    return content.shop;
  }

  async getAllContent(): Promise<Content> {
    return loadContent();
  }
}