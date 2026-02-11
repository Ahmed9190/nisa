export interface SiteConfig {
  title: string;
  description: string;
  navigation: { name: string; href: string }[];
  footer: {
    copyright: string;
    tagline: string;
  };
}

export interface Product {
  id: string;
  name: string;
  price: number;
  priceBefore?: number;
  discountPrice?: number;
  currency: string;
  description: string;
  details: {
    fabric: string;
    fit: string;
    care: string;
  };
  sizes: string[];
  colors: {
    name: string;
    code: string;
    images: string[];
    inStock?: boolean;
  }[];
  category: string;
  featured: boolean;
  inStock: boolean;
  sku: string;
  comingSoon?: boolean;
}

export interface Content {
  home: {
    hero: {
      title: string;
      subtitle: string;
      backgroundImage: string;
    };
    featuredCollection: {
      title: string;
      buttonText: string;
    };
  };
  about: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
  };
  shop: {
    title: string;
  };
}
