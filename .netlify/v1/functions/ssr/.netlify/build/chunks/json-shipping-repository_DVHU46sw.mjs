let cachedRates = null;
async function loadRates() {
  if (cachedRates) {
    return cachedRates;
  }
  const module = await import('./shipping_BziYZ6om.mjs');
  cachedRates = module.default || module;
  return cachedRates;
}
class JsonShippingRepository {
  async getAllRates() {
    return loadRates();
  }
  async getRateByCity(city) {
    const rates = await loadRates();
    return rates.find((r) => r.city.toLowerCase() === city.toLowerCase()) || null;
  }
}

export { JsonShippingRepository };
