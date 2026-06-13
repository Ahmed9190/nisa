import { productStore } from './product-store';
import { parseUploadedImages, saveUploadedImages } from './image-upload';
import { parseProductForm, slugify, type ProductInput } from './validation';

export async function productInputFromFormData(formData: FormData, existingId?: string): Promise<ProductInput> {
  const product = parseProductForm(formData);
  const groups = await parseUploadedImages(formData);

  if (existingId) {
    product.id = existingId;
  } else {
    product.id = product.id || slugify(product.name);
  }

  for (const group of groups) {
    const color = product.colors[group.colorIndex];

    if (!color) {
      continue;
    }

    const uploadedPaths = await saveUploadedImages(product.id, color.name, group.files, color.images.length);
    color.images.push(...uploadedPaths);
  }

  return product;
}

export async function jsonResponse<T>(body: T, status: number): Promise<Response> {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json',
    },
  });
}

export async function productExists(id: string): Promise<boolean> {
  return Boolean(await productStore.getById(id));
}
