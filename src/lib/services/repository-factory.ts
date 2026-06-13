import type { ProductRepository } from '../repositories/product-repository';
import type { ContentRepository } from '../repositories/content-repository';
import type { ShippingRepository } from '../repositories/shipping-repository';
import type { SiteRepository } from '../repositories/site-repository';
import type { Locale } from '../../i18n';

let productRepositoryInstances: Record<Locale, ProductRepository | null> = {
  en: null,
  ar: null,
};
let contentRepositoryInstance: ContentRepository | null = null;
let shippingRepositoryInstance: ShippingRepository | null = null;
let siteRepositoryInstance: SiteRepository | null = null;

async function loadJsonProductRepository(locale: Locale): Promise<ProductRepository> {
  const { JsonProductRepository } = await import('../repositories/json-product-repository');
  return new JsonProductRepository(locale);
}

async function loadJsonContentRepository(): Promise<ContentRepository> {
  const { JsonContentRepository } = await import('../repositories/json-content-repository');
  return new JsonContentRepository();
}

async function loadJsonShippingRepository(): Promise<ShippingRepository> {
  const { JsonShippingRepository } = await import('../repositories/json-shipping-repository');
  return new JsonShippingRepository();
}

async function loadJsonSiteRepository(): Promise<SiteRepository> {
  const { JsonSiteRepository } = await import('../repositories/json-site-repository');
  return new JsonSiteRepository();
}

export async function getProductRepository(locale: Locale = 'en'): Promise<ProductRepository> {
  if (!productRepositoryInstances[locale]) {
    productRepositoryInstances[locale] = await loadJsonProductRepository(locale);
  }
  return productRepositoryInstances[locale]!;
}

export function setProductRepository(repo: ProductRepository, locale: Locale = 'en'): void {
  productRepositoryInstances[locale] = repo;
}

export async function getContentRepository(): Promise<ContentRepository> {
  if (!contentRepositoryInstance) {
    contentRepositoryInstance = await loadJsonContentRepository();
  }
  return contentRepositoryInstance;
}

export function setContentRepository(repo: ContentRepository): void {
  contentRepositoryInstance = repo;
}

export async function getShippingRepository(): Promise<ShippingRepository> {
  if (!shippingRepositoryInstance) {
    shippingRepositoryInstance = await loadJsonShippingRepository();
  }
  return shippingRepositoryInstance;
}

export function setShippingRepository(repo: ShippingRepository): void {
  shippingRepositoryInstance = repo;
}

export async function getSiteRepository(): Promise<SiteRepository> {
  if (!siteRepositoryInstance) {
    siteRepositoryInstance = await loadJsonSiteRepository();
  }
  return siteRepositoryInstance;
}

export function setSiteRepository(repo: SiteRepository): void {
  siteRepositoryInstance = repo;
}

export function clearRepositoryCache(): void {
  productRepositoryInstances = {
    en: null,
    ar: null,
  };
  contentRepositoryInstance = null;
  shippingRepositoryInstance = null;
  siteRepositoryInstance = null;
}