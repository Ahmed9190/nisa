import { P as ProductStore, c as clearProductCache } from './product-store_DzXRAkIU.mjs';

const cachedProducts = /* @__PURE__ */ new Map();
const productStore = new ProductStore();
function toLocalizedProduct(product, locale) {
  if (locale === "ar") {
    return {
      ...product,
      name: product.nameAr || product.name,
      description: product.descriptionAr || product.description,
      details: product.detailsAr || product.details,
      colors: product.colors.map((color) => ({
        ...color,
        name: color.nameAr || color.name
      }))
    };
  }
  return product;
}
async function loadProducts(locale) {
  if (cachedProducts.has(locale)) {
    return cachedProducts.get(locale);
  }
  const module = await import('./products_NIS95PS1.mjs');
  const rawProducts = module.default?.products || module.products || [];
  const products = rawProducts.map((p) => toLocalizedProduct(p, locale));
  cachedProducts.set(locale, products);
  return products;
}
class JsonProductRepository {
  constructor(locale = "en") {
    this.locale = locale;
  }
  async getAll() {
    const products = await loadProducts(this.locale);
    return products.filter((p) => !p.hidden);
  }
  async getById(id) {
    const products = await loadProducts(this.locale);
    const product = products.find((p) => p.id === id) || null;
    return product && !product.hidden ? product : null;
  }
  async getByCategory(category) {
    const products = await loadProducts(this.locale);
    return products.filter((p) => p.category === category && !p.hidden);
  }
  async getFeatured() {
    const products = await loadProducts(this.locale);
    return products.filter((p) => p.featured && !p.hidden);
  }
  async search(query) {
    const products = await loadProducts(this.locale);
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (p) => !p.hidden && (p.name.toLowerCase().includes(lowerQuery) || p.nameAr?.toLowerCase().includes(lowerQuery) || p.description.toLowerCase().includes(lowerQuery) || p.descriptionAr?.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery))
    );
  }
  async getAllIds() {
    const products = await loadProducts(this.locale);
    return products.filter((p) => !p.hidden).map((p) => p.id);
  }
  async create(productData) {
    const product = await productStore.create(productData);
    clearProductCache();
    return product;
  }
  async update(id, productData) {
    const product = await productStore.update(id, productData);
    clearProductCache();
    return product;
  }
  async delete(id) {
    const deleted = await productStore.delete(id);
    clearProductCache();
    return deleted;
  }
}

export { JsonProductRepository };
