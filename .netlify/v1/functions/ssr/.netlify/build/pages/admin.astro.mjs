/* empty css                                 */
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../chunks/AdminLayout_t-kFeYO2.mjs';
import { p as productStore } from '../chunks/product-store_DzXRAkIU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const products = await productStore.getAll();
  const total = products.length;
  const inStock = products.filter((p) => p.inStock && !p.comingSoon).length;
  const outOfStock = products.filter((p) => !p.inStock && !p.comingSoon).length;
  const comingSoon = products.filter((p) => p.comingSoon).length;
  const featured = products.filter((p) => p.featured).length;
  const categories = [...new Set(products.map((p) => p.category).filter(Boolean))];
  const lowestPrice = Math.min(...products.filter((p) => p.price).map((p) => p.price));
  const highestPrice = Math.max(...products.filter((p) => p.price).map((p) => p.price));
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard", "active": "dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-stats-grid"> <div class="admin-stat-card"> <p class="admin-stat-label">Total products</p> <p class="admin-stat-value">${total}</p> </div> <div class="admin-stat-card"> <p class="admin-stat-label">In stock</p> <p class="admin-stat-value">${inStock}</p> </div> <div class="admin-stat-card"> <p class="admin-stat-label">Out of stock</p> <p class="admin-stat-value">${outOfStock}</p> </div> <div class="admin-stat-card"> <p class="admin-stat-label">Coming soon</p> <p class="admin-stat-value">${comingSoon}</p> </div> <div class="admin-stat-card"> <p class="admin-stat-label">Featured</p> <p class="admin-stat-value">${featured}</p> </div> <div class="admin-stat-card"> <p class="admin-stat-label">Categories</p> <p class="admin-stat-value">${categories.length}</p> </div> <div class="admin-stat-card"> <p class="admin-stat-label">Price range</p> <p class="admin-stat-value">EGP ${lowestPrice} — ${highestPrice}</p> </div> </div> <h2 class="admin-section-title">Categories</h2> <ul class="admin-categories-list"> ${categories.map((cat) => renderTemplate`<li class="admin-category-item">${cat}</li>`)} </ul> ` })}`;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/admin/index.astro";
const $$url = "/admin/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
