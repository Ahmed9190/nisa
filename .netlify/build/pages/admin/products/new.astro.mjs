/* empty css                                       */
import { c as createComponent, e as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_t-kFeYO2.mjs';
import { $ as $$ProductForm } from '../../../chunks/ProductForm_Dmt6NyG4.mjs';
export { renderers } from '../../../renderers.mjs';

const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "New product", "active": "products" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductForm", $$ProductForm, { "action": "create" })} ` })}`;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/new.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/new.astro";
const $$url = "/admin/products/new/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
