/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_t-kFeYO2.mjs';
import { p as productStore } from '../../chunks/product-store_DzXRAkIU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const products = await productStore.getAll();
  const searchQuery = Astro2.url.searchParams.get("q") || "";
  const stockFilter = Astro2.url.searchParams.get("status") || "";
  const sortColumn = Astro2.url.searchParams.get("sort") || "name";
  const sortDir = Astro2.url.searchParams.get("dir") || "asc";
  let filtered = products;
  if (searchQuery) {
    const lower = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(lower) || (p.nameAr || "").toLowerCase().includes(lower)
    );
  }
  if (stockFilter === "in-stock") {
    filtered = filtered.filter((p) => p.inStock && !p.comingSoon);
  } else if (stockFilter === "out-of-stock") {
    filtered = filtered.filter((p) => !p.inStock && !p.comingSoon);
  } else if (stockFilter === "coming-soon") {
    filtered = filtered.filter((p) => p.comingSoon);
  }
  filtered.sort((a, b) => {
    const aValue = String(a[sortColumn] ?? "");
    const bValue = String(b[sortColumn] ?? "");
    const modifier = sortDir === "desc" ? -1 : 1;
    return aValue.localeCompare(bValue) * modifier;
  });
  function toggleDir(column) {
    if (column === sortColumn) {
      return sortDir === "asc" ? "desc" : "asc";
    }
    return "asc";
  }
  function paramString(params) {
    const merged = /* @__PURE__ */ new Map([
      ["q", searchQuery],
      ["status", stockFilter],
      ["sort", params.sort || sortColumn],
      ["dir", params.dir || "asc"]
    ]);
    Object.entries(params).forEach(([k, v]) => merged.set(k, v));
    return `?${Array.from(merged.entries()).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&")}`;
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Products", "active": "products" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-toolbar"> <form class="admin-search" method="GET" action="/admin/products/"> <input type="text" name="q" placeholder="Search by name (EN/AR)"${addAttribute(searchQuery, "value")}> <select name="status"> <option value="">All status</option> <option value="in-stock"${addAttribute(stockFilter === "in-stock", "selected")}>In stock</option> <option value="out-of-stock"${addAttribute(stockFilter === "out-of-stock", "selected")}>Out of stock</option> <option value="coming-soon"${addAttribute(stockFilter === "coming-soon", "selected")}>Coming soon</option> </select> <button type="submit" class="admin-primary-button">Search</button> </form> <a class="admin-primary-button" href="/admin/products/new/">Add product</a> </div> <div class="admin-table-container"> <table class="admin-table"> <thead> <tr> <th>Image</th> <th> <a class="admin-sort-link"${addAttribute(paramString({ sort: "name", dir: toggleDir("name") }), "href")}>
Name ${sortColumn === "name" ? sortDir === "asc" ? "\u2191" : "\u2193" : ""} </a> </th> <th> <a class="admin-sort-link"${addAttribute(paramString({ sort: "price", dir: toggleDir("price") }), "href")}>
Price ${sortColumn === "price" ? sortDir === "asc" ? "\u2191" : "\u2193" : ""} </a> </th> <th>Colors</th> <th>Sizes</th> <th> <a class="admin-sort-link"${addAttribute(paramString({ sort: "category", dir: toggleDir("category") }), "href")}>
Category ${sortColumn === "category" ? sortDir === "asc" ? "\u2191" : "\u2193" : ""} </a> </th> <th>Stock</th> <th>Visibility</th> <th>Actions</th> </tr> </thead> <tbody> ${filtered.map((product) => {
    const preview = (product.colors.find((c) => c.images?.length)?.images || [])[0];
    return renderTemplate`<tr> <td class="admin-thumb-col"> ${preview ? renderTemplate`<img class="admin-thumb"${addAttribute(preview, "src")} alt="">` : renderTemplate`<span class="admin-no-thumb">—</span>`} </td> <td> <strong>${product.name}</strong> ${product.nameAr && renderTemplate`<span class="admin-ar-name">${product.nameAr}</span>`} </td> <td>EGP ${product.price}</td> <td>${product.colors.length}</td> <td>${product.sizes.length}</td> <td>${product.category}</td> <td> ${product.comingSoon ? "Coming soon" : product.inStock ? "In stock" : "Out of stock"} </td> <td> ${product.hidden ? renderTemplate`<span class="admin-status-badge" style="background-color: #fee2e2; color: #991b1b; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; display: inline-block;">Hidden</span>` : renderTemplate`<span class="admin-status-badge" style="background-color: #d1fae5; color: #065f46; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; display: inline-block;">Visible</span>`} </td> <td class="admin-actions"> <a class="admin-secondary-button"${addAttribute(`/admin/products/${product.id}/?returnUrl=${encodeURIComponent(`/admin/products/${product.id}/`)}`, "href")}>Edit</a> <a class="admin-danger-button"${addAttribute(`/admin/products/${product.id}/delete/`, "href")}>Delete</a> <a class="admin-secondary-button"${addAttribute(`/${product.id}/`, "href")} target="_blank">Preview</a> </td> </tr>`;
  })} ${filtered.length === 0 && renderTemplate`<tr><td colspan="9">No products found.</td></tr>`} </tbody> </table> </div> <div class="admin-toolbar" style="margin-top: 1rem;"> <label class="admin-checkbox"> <input type="checkbox" disabled> Bulk delete selected <em>(Phase 1+)</em> </label> </div> ` })}`;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/index.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/admin/products/index.astro";
const $$url = "/admin/products/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
