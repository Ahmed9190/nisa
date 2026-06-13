import type { ProductRepository } from '../repositories/product-repository';
import type { ContentRepository } from '../repositories/content-repository';
import type { ShippingRepository } from '../repositories/shipping-repository';
import type { SiteRepository } from '../repositories/site-repository';

let productRepositoryInstance: ProductRepository | null = null;
let contentRepositoryInstance: ContentRepository | null = null;
let shippingRepositoryInstance: ShippingRepository | null = null;
let siteRepositoryInstance: SiteRepository | null = null;

async function loadJsonProductRepository(): Promise<ProductRepository> {
  const { JsonProductRepository } = await import('../repositories/json-product-repository');
  return new JsonProductRepository();
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

export async function getProductRepository(): Promise<ProductRepository> {
  if (!productRepositoryInstance) {
    productRepositoryInstance = await loadJsonProductRepository();
  }
  return productRepositoryInstance;
}

export function setProductRepository(repo: ProductRepository): void {
  productRepositoryInstance = repo;
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
  productRepositoryInstance = null;
  contentRepositoryInstance = null;
  shippingRepositoryInstance = null;
  siteRepositoryInstance = null;
}