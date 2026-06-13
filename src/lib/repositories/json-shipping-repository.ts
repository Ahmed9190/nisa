import type { ShippingRepository, ShippingRate } from './shipping-repository';

let cachedRates: ShippingRate[] | null = null;

async function loadRates(): Promise<ShippingRate[]> {
  if (cachedRates) {
    return cachedRates;
  }
  
  const module = await import('../../data/shipping.json');
  cachedRates = module.default || module;
  return cachedRates;
}

export class JsonShippingRepository implements ShippingRepository {
  async getAllRates(): Promise<ShippingRate[]> {
    return loadRates();
  }

  async getRateByCity(city: string): Promise<ShippingRate | null> {
    const rates = await loadRates();
    return rates.find(r => r.city.toLowerCase() === city.toLowerCase()) || null;
  }
}