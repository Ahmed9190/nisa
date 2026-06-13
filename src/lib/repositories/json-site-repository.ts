import type { SiteRepository } from './site-repository';
import type { SiteConfig } from '../../types';

let cachedConfig: SiteConfig | null = null;

async function loadConfig(): Promise<SiteConfig> {
  if (cachedConfig) {
    return cachedConfig;
  }
  
  const module = await import('../../data/site.json');
  cachedConfig = module.default || module;
  return cachedConfig;
}

export class JsonSiteRepository implements SiteRepository {
  async getSiteConfig(): Promise<SiteConfig> {
    return loadConfig();
  }
}