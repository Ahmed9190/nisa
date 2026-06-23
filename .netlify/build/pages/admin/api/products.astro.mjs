import { v as validateProductInput, p as productStore, f as formatZodErrors } from '../../../chunks/product-store_DzXRAkIU.mjs';
import { p as productInputFromFormData, j as jsonResponse } from '../../../chunks/product-form_B_ahevB4.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const input = await productInputFromFormData(formData);
    const product = validateProductInput(input);
    const created = await productStore.create(product);
    return jsonResponse({ product: created }, 201);
  } catch (error) {
    console.error("API validation error details for POST:", error);
    const status = error instanceof Error && error.message.includes("Invalid") ? 400 : 400;
    return jsonResponse({ error: "Validation failed", details: formatZodErrors(error) }, status);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
