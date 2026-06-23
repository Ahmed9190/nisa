let cachedContent = null;
async function loadContent() {
  if (cachedContent) {
    return cachedContent;
  }
  const module = await import('./content_D5tEaeRb.mjs');
  cachedContent = module.default || module;
  return cachedContent;
}
class JsonContentRepository {
  async getHomeContent() {
    const content = await loadContent();
    return content.home;
  }
  async getAboutContent() {
    const content = await loadContent();
    return content.about;
  }
  async getContactContent() {
    const content = await loadContent();
    return content.contact;
  }
  async getShopContent() {
    const content = await loadContent();
    return content.shop;
  }
  async getAllContent() {
    return loadContent();
  }
}

export { JsonContentRepository };
