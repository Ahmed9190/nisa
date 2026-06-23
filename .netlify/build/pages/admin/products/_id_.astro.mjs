/* empty css                                       */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_t-kFeYO2.mjs';
import { $ as $$ProductForm } from '../../../chunks/ProductForm_Dmt6NyG4.mjs';
import { p as productStore } from '../../../chunks/product-store_DzXRAkIU.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { id } = Astro2.params;
  const product = await productStore.getById(id || "");
  if (!product) {
    return Astro2.redirect("/admin/products/");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": `Edit \u2014 ${product.name}`, "active": "products" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductForm", $$ProductForm, { "product": product, "action": "edit" })} ` })}`;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/[id]/index.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/[id]/index.astro";
const $$url = "/admin/products/[id]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
