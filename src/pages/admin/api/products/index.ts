import type { APIRoute } from 'astro';
import { productStore } from '../../../../lib/product-store';
import { productInputFromFormData, jsonResponse } from '../../../../lib/product-form';
import { formatZodErrors, validateProductInput } from '../../../../lib/validation';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const input = await productInputFromFormData(formData);
    const product = validateProductInput(input);
    const created = await productStore.create(product);

    return jsonResponse({ product: created }, 201);
  } catch (error) {
    console.error('API validation error details for POST:', error);
    const status = error instanceof Error && error.message.includes('Invalid') ? 400 : 400;
    return jsonResponse({ error: 'Validation failed', details: formatZodErrors(error) }, status);
  }
};
