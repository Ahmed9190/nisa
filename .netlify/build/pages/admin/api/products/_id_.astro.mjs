import { v as validateProductInput, p as productStore, f as formatZodErrors } from '../../../../chunks/product-store_DzXRAkIU.mjs';
import { p as productInputFromFormData, j as jsonResponse } from '../../../../chunks/product-form_B_ahevB4.mjs';
export { renderers } from '../../../../renderers.mjs';

const PUT = async ({ request, params }) => {
  try {
    const id = params.id;
    const formData = await request.formData();
    const input = await productInputFromFormData(formData, id);
    const product = validateProductInput(input);
    const updated = await productStore.update(id, product);
    if (!updated) {
      return jsonResponse({ error: "Product not found" }, 404);
    }
    return jsonResponse({ product: updated }, 200);
  } catch (error) {
    console.error("API validation error details for PUT:", error);
    const status = error instanceof Error && error.message.includes("Invalid") ? 400 : 400;
    return jsonResponse({ error: "Validation failed", details: formatZodErrors(error) }, status);
  }
};
const DELETE = async ({ params }) => {
  const id = params.id;
  const deleted = await productStore.delete(id);
  if (!deleted) {
    return jsonResponse({ error: "Product not found" }, 404);
  }
  return jsonResponse({ deleted: true }, 200);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
