import { z } from 'zod';
import type { Product } from '../../types';

export const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;

const detailsSchema = z.object({
  fabric: z.string().trim().min(1, 'Fabric is required'),
  fit: z.string().trim().min(1, 'Fit is required'),
  care: z.string().trim().min(1, 'Care instructions are required'),
});

export const colorSchema = z.object({
  name: z.string().trim().min(1, 'Color name is required'),
  nameAr: z.string().trim().optional(),
  code: z.string().trim().regex(HEX_COLOR_PATTERN, 'Color must use #RRGGBB format'),
  images: z.array(z.string().trim().regex(/^\/[\w./-]+$/, 'Image must be a valid relative URL')).min(1, 'At least one image is required'),
  inStock: z.boolean().default(true),
});

export const productInputSchema = z.object({
  id: z.string().trim().min(1).optional(),
  name: z.string().trim().min(1, 'English name is required'),
  nameAr: z.string().trim().optional(),
  price: z.coerce.number().nonnegative('Price must be zero or greater'),
  priceBefore: z.coerce.number().nonnegative('Price before must be zero or greater').optional(),
  currency: z.string().trim().min(1).default('EGP'),
  description: z.string().trim().min(1, 'English description is required'),
  descriptionAr: z.string().trim().optional(),
  details: detailsSchema,
  detailsAr: detailsSchema.partial().optional(),
  sizes: z.array(z.string().trim().min(1, 'Size cannot be empty')).min(1, 'At least one size is required'),
  colors: z.array(colorSchema).min(1, 'At least one color is required'),
  category: z.string().trim().min(1, 'Category is required'),
  featured: z.boolean().default(false),
  inStock: z.boolean().default(true),
  sku: z.string().trim().min(1, 'SKU is required'),
  comingSoon: z.boolean().default(false),
}).superRefine((value, ctx) => {
  if (value.priceBefore !== undefined && value.priceBefore <= value.price) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['priceBefore'],
      message: 'Price before must be greater than price',
    });
  }
});

export type ProductInput = z.infer<typeof productInputSchema>;

export function parseProductForm(formData: FormData): ProductInput {
  const raw = formData.get('product');
  if (raw && typeof raw === 'string') {
    return productInputSchema.parse(JSON.parse(raw));
  }

  return productInputSchema.parse({
    id: formData.get('id') || undefined,
    name: formData.get('name') || '',
    nameAr: formData.get('nameAr') || '',
    price: formData.get('price') || 0,
    priceBefore: formData.get('priceBefore') || undefined,
    currency: formData.get('currency') || 'EGP',
    description: formData.get('description') || '',
    descriptionAr: formData.get('descriptionAr') || '',
    details: {
      fabric: formData.get('details.fabric') || '',
      fit: formData.get('details.fit') || '',
      care: formData.get('details.care') || '',
    },
    detailsAr: {
      fabric: formData.get('detailsAr.fabric') || '',
      fit: formData.get('detailsAr.fit') || '',
      care: formData.get('detailsAr.care') || '',
    },
    sizes: formData.getAll('sizes').map(String).filter(Boolean),
    colors: formData.getAll('colors').map((value) => JSON.parse(String(value))),
    category: formData.get('category') || '',
    featured: formData.get('featured') === 'on',
    inStock: formData.get('inStock') === 'on',
    sku: formData.get('sku') || '',
    comingSoon: formData.get('comingSoon') === 'on',
  });
}

export function validateProductInput(input: unknown): ProductInput {
  return productInputSchema.parse(input);
}

export function formatZodErrors(error: unknown): Record<string, string> {
  if (!(error instanceof z.ZodError)) {
    return { form: error instanceof Error ? error.message : 'Invalid request' };
  }

  return error.issues.reduce<Record<string, string>>((errors, issue) => {
    const path = issue.path.length > 0 ? issue.path.join('.') : 'form';
    errors[path] = issue.message;
    return errors;
  }, {});
}

export function toProduct(input: ProductInput, now = new Date()): Product {
  const timestamp = now.toISOString();

  return {
    ...input,
    id: input.id || slugify(input.name),
    nameAr: input.nameAr || input.name,
    descriptionAr: input.descriptionAr || input.description,
    detailsAr: input.detailsAr || input.details,
    currency: input.currency || 'EGP',
    featured: Boolean(input.featured),
    inStock: Boolean(input.inStock),
    comingSoon: Boolean(input.comingSoon),
    createdAt: input.id ? undefined : timestamp,
    updatedAt: timestamp,
  };
}

export function mergeProductData(existing: Product, input: ProductInput): Product {
  const timestamp = new Date().toISOString();

  return {
    ...existing,
    ...input,
    id: existing.id,
    nameAr: input.nameAr || input.name,
    descriptionAr: input.descriptionAr || input.description,
    detailsAr: input.detailsAr || input.details,
    currency: input.currency || existing.currency,
    featured: Boolean(input.featured),
    inStock: Boolean(input.inStock),
    comingSoon: Boolean(input.comingSoon),
    createdAt: existing.createdAt,
    updatedAt: timestamp,
  };
}

export function slugify(value: string): string {
  const slug = value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug || 'product';
}

export function getStockStatus(product: Product): 'In Stock' | 'Out of Stock' | 'Coming Soon' {
  if (product.comingSoon) {
    return 'Coming Soon';
  }

  return product.inStock ? 'In Stock' : 'Out of Stock';
}

export function getFirstImageUrl(product: Product): string | null {
  return product.colors.find((color) => color.images.length > 0)?.images[0] || null;
}

export function normalizeColorName(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '-');
}
