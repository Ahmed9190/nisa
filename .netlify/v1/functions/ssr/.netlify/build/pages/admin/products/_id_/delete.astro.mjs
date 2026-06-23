/* empty css                                          */
import { c as createComponent, a as createAstro, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../../../../chunks/AdminLayout_t-kFeYO2.mjs';
import { p as productStore, g as getFirstImageUrl } from '../../../../chunks/product-store_DzXRAkIU.mjs';
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Delete = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Delete;
  const { id } = Astro2.params;
  const product = await productStore.getById(id || "");
  if (!product) {
    return Astro2.redirect("/admin/products/");
  }
  const returnUrl = Astro2.url.searchParams.get("returnUrl") || "/admin/products/";
  const previewImage = getFirstImageUrl(product);
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const form = document.querySelector('[data-delete-form]');\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const csrf = document.cookie.split('; ').find((cookie) => cookie.startsWith('csrf_token='))?.split('=')[1];\n    const response = await fetch(form.action, {\n      method: 'POST',\n      headers: { 'x-csrf-token': csrf || '' },\n      body: new FormData(form),\n    });\n    if (response.ok) {\n      window.location.href = '/admin/products/';\n    } else {\n      window.showAdminToast?.('Failed to delete product', 'error');\n    }\n  });\n<\/script>"])), renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": `Delete \u2014 ${product.name}`, "active": "products" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-delete-page"> <h2>Delete product</h2> <p>Are you sure you want to delete <strong>${product.name}</strong>?</p> ${previewImage && renderTemplate`<img${addAttribute(previewImage, "src")} alt="" class="admin-delete-preview">`} <p class="admin-delete-warning">This will remove the product from both EN and AR JSON files and delete uploaded images.</p> <form method="POST"${addAttribute(`/admin/api/products/${id}/`, "action")} data-delete-form> <input type="hidden" name="_method" value="DELETE"> <div class="admin-form-actions"> <a class="admin-secondary-button"${addAttribute(returnUrl, "href")}>Cancel</a> <button type="submit" class="admin-danger-button">Delete permanently</button> </div> </form> </div> ` }));
}, "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/[id]/delete.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/[id]/delete.astro";
const $$url = "/admin/products/[id]/delete/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Delete,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
