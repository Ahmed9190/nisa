export interface ShippingRate {
  city: string;
  price: number;
}

export interface ShippingRepository {
  getAllRates(): Promise<ShippingRate[]>;
  getRateByCity(city: string): Promise<ShippingRate | null>;
}