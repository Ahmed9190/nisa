import type { APIRoute } from 'astro';
import { productStore } from '../../../../lib/product-store';
import { productInputFromFormData, jsonResponse } from '../../../../lib/product-form';
import { formatZodErrors, validateProductInput } from '../../../../lib/validation';

export const PUT: APIRoute = async ({ request, params }) => {
  try {
    const id = params.id;
    const formData = await request.formData();
    const input = await productInputFromFormData(formData, id);
    const product = validateProductInput(input);
    const updated = await productStore.update(id, product);

    if (!updated) {
      return jsonResponse({ error: 'Product not found' }, 404);
    }

    return jsonResponse({ product: updated }, 200);
  } catch (error) {
    const status = error instanceof Error && error.message.includes('Invalid') ? 400 : 400;
    return jsonResponse({ error: 'Validation failed', details: formatZodErrors(error) }, status);
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;
  const deleted = await productStore.delete(id);

  if (!deleted) {
    return jsonResponse({ error: 'Product not found' }, 404);
  }

  return jsonResponse({ deleted: true }, 200);
};
