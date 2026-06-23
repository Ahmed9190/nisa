/* empty css                                       */
import { c as createComponent, a as createAstro, r as renderTemplate, g as defineScriptVars, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as getProductRepository, $ as $$Layout, t } from '../../../chunks/Layout_qsDO4kKH.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { lang, id } = Astro2.params;
  const locale = lang;
  const productRepo = await getProductRepository(locale);
  const product = await productRepo.getById(id);
  if (!product) {
    return Astro2.redirect(`/${locale}/shop/`);
  }
  const formatPrice = (price, currency = "EGP") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 0
    }).format(price);
  };
  const comingSoonText = locale === "ar" ? "\u0642\u0631\u064A\u0628\u0627\u064B" : "Coming Soon";
  const mainImageSrc = product.colors[0] && product.colors[0].images && product.colors[0].images[0] ? product.colors[0].images[0] : `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'>${comingSoonText}</text></svg>`;
  return renderTemplate(_a || (_a = __template(["", "   <script>(function(){", "\n    const colorSwatches = document.querySelectorAll('.color-swatch');\n    const addToCartBtn = document.getElementById('add-to-cart-product-page-btn');\n    const mainImage = document.getElementById('main-product-image');\n\n    const lang = locale;\n\n    colorSwatches.forEach(swatch => {\n        swatch.addEventListener('click', () => {\n            // Update active swatch border\n            colorSwatches.forEach(s => s.classList.remove('border-[#204566]'));\n            swatch.classList.add('border-[#204566]');\n\n            // Update main image\n            const images = JSON.parse(swatch.dataset.images);\n            if (images && images.length > 0) {\n                mainImage.src = images[0];\n            }\n\n            // Update add to cart button\n            const colorIndex = parseInt(swatch.dataset.colorIndex, 10);\n            const color = product.colors[colorIndex];\n            const inStock = color.inStock ?? true;\n            addToCartBtn.disabled = !inStock;\n            addToCartBtn.textContent = inStock ? 'Add to Cart' : 'Sold Out';\n        });\n    });\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "locale": locale, "title": `${product.name} - nisa`, "data-astro-cid-53nrazri": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-53nrazri> <div class="product-main-layout flex flex-col lg:flex-row gap-12" data-astro-cid-53nrazri> <div class="w-full lg:w-1/2" data-astro-cid-53nrazri> <div class="relative" data-astro-cid-53nrazri> <img id="main-product-image"${addAttribute(mainImageSrc, "src")}${addAttribute(product.name, "alt")} class="w-full rounded-lg shadow-lg sticky top-24" data-astro-cid-53nrazri> <div id="gallery-controls" class="absolute inset-0 flex items-center justify-between px-4 text-white" style="display: none;" data-astro-cid-53nrazri> <button id="prev-image" class="bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors" data-astro-cid-53nrazri>&lt;</button> <button id="next-image" class="bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors" data-astro-cid-53nrazri>&gt;</button> </div> </div> <div id="thumbnail-container" class="flex gap-2 mt-4 overflow-x-auto" data-astro-cid-53nrazri></div> </div> <div class="w-full lg:w-1/2" data-astro-cid-53nrazri> <h1 class="text-4xl font-medium" data-astro-cid-53nrazri>${product.name}</h1> <div class="text-2xl my-4" data-astro-cid-53nrazri> ${product.price > 0 ? renderTemplate`<span data-astro-cid-53nrazri>${formatPrice(product.price)}</span>` : renderTemplate`<span class="font-medium text-[#204566] dark:text-[#3182ce]" data-astro-cid-53nrazri>${t(locale, "product.comingSoon")}</span>`} </div> <p class="text-[#6B7B8C] dark:text-[#94a3b8] leading-relaxed mb-6" data-astro-cid-53nrazri>${product.description}</p> <div class="mb-6" data-astro-cid-53nrazri> <label class="block font-medium mb-2" data-astro-cid-53nrazri>${t(locale, "product.color")}</label> <div class="flex gap-2" data-astro-cid-53nrazri> ${product.colors.map((color, index) => renderTemplate`<button${addAttribute(`color-swatch border-2 rounded-full h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#204566] ${index === 0 ? "border-[#204566]" : "border-transparent"} ${!(color.inStock ?? true) ? "opacity-50 cursor-not-allowed relative" : ""}`, "class")}${addAttribute(`--swatch-color: ${color.code};`, "style")}${addAttribute(JSON.stringify(color.images), "data-images")}${addAttribute(index, "data-color-index")}${addAttribute(color.inStock ?? true, "data-in-stock")} data-astro-cid-53nrazri> ${!(color.inStock ?? true) && renderTemplate`<div class="absolute inset-0 w-full h-full bg-white/70 rounded-full" data-astro-cid-53nrazri></div>`} ${!(color.inStock ?? true) && renderTemplate`<div class="absolute inset-0 w-full h-full" style="background: linear-gradient(to top right, transparent calc(50% - 1px), black, transparent calc(50% + 1px));" data-astro-cid-53nrazri></div>`} </button>`)} </div> </div> <div class="mb-6" data-astro-cid-53nrazri> <div class="flex justify-between items-center mb-2" data-astro-cid-53nrazri> <label class="block font-medium" data-astro-cid-53nrazri>${t(locale, "product.size")}</label> <button id="size-guide-btn" class="text-sm text-[#6B7B8C] underline hover:text-[#204566]" data-astro-cid-53nrazri>${t(locale, "product.sizeGuide")}</button> </div> <div class="flex gap-2" data-astro-cid-53nrazri> ${product.sizes.map((size, index) => renderTemplate`<button${addAttribute(`size-btn border-2 px-4 py-2 rounded-md ${index === 0 ? "bg-[#204566] text-white" : "bg-transparent"}`, "class")} data-astro-cid-53nrazri>${size}</button>`)} </div> </div> <button id="add-to-cart-product-page-btn"${addAttribute(product.id, "data-product-id")} class="btn-primary w-full"${addAttribute(!(product.colors[0].inStock ?? true), "disabled")} data-astro-cid-53nrazri> ${product.colors[0].inStock ?? true ? t(locale, "product.addToCart") : t(locale, "product.soldOut")} </button> ${!product.inStock && renderTemplate`<p class="text-center mt-4 text-red-600 font-semibold" data-astro-cid-53nrazri>${t(locale, "product.soldOut")}</p>`} <div class="mt-8 flex justify-around text-center text-sm text-[#6B7B8C] dark:text-[#94a3b8] border-t border-b border-[#D4E4E8] dark:border-[#1b456b] py-4" data-astro-cid-53nrazri> <div class="flex items-center gap-2" data-astro-cid-53nrazri><span data-astro-cid-53nrazri>✓</span><span data-astro-cid-53nrazri>${t(locale, "product.hassleFreeReturns")}</span></div> <div class="flex items-center gap-2" data-astro-cid-53nrazri><span data-astro-cid-53nrazri>✓</span><span data-astro-cid-53nrazri>${t(locale, "product.securePayments")}</span></div> <div class="flex items-center gap-2" data-astro-cid-53nrazri><span data-astro-cid-53nrazri>✓</span><span data-astro-cid-53nrazri>${t(locale, "product.qualityFabrics")}</span></div> </div> <div class="mt-8" data-astro-cid-53nrazri> <h3 class="text-xl font-medium mb-4 border-b border-[#D4E4E8] dark:border-[#1b456b] pb-2" data-astro-cid-53nrazri>${t(locale, "product.detailsFit")}</h3> <ul class="text-[#6B7B8C] dark:text-[#94a3b8] space-y-2" data-astro-cid-53nrazri> <li data-astro-cid-53nrazri><strong data-astro-cid-53nrazri>${t(locale, "product.fabric")}:</strong> ${product.details.fabric}</li> <li data-astro-cid-53nrazri><strong data-astro-cid-53nrazri>${t(locale, "product.fit")}:</strong> ${product.details.fit}</li> <li data-astro-cid-53nrazri><strong data-astro-cid-53nrazri>${t(locale, "product.care")}:</strong> ${product.details.care}</li> </ul> </div> </div> </div> </div> ` }), defineScriptVars({ product, locale }));
}, "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/product/[id].astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/product/[id].astro";
const $$url = "/[lang]/product/[id]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
