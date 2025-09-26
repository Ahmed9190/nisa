import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './chunk.DNTP8zLh.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css               */

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const formatPrice = (price, currency = "EGP") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 0
    }).format(price);
  };
  return renderTemplate`${maybeRenderHead()}<div class="product-card p-4 flex flex-col text-center border border-[#D4E4E8] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300" data-astro-cid-tjdfhdqb> ${!product.inStock && renderTemplate`<div class="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full" data-astro-cid-tjdfhdqb>Sold Out</div>`} <a${addAttribute(`/product/${product.id}`, "href")} data-astro-cid-tjdfhdqb> <img${addAttribute(product.colors[0].images[0], "src")}${addAttribute(product.name, "alt")} class="w-full h-auto object-cover rounded-md aspect-[3/4]" data-astro-cid-tjdfhdqb> </a> <div class="flex-grow flex flex-col pt-4" data-astro-cid-tjdfhdqb> <h3 class="text-xl font-medium" data-astro-cid-tjdfhdqb>${product.name}</h3> <p class="text-lg text-[#6B7B8C] mt-1 flex-grow" data-astro-cid-tjdfhdqb>${formatPrice(product.price)}</p> <div class="mt-4 grid grid-cols-2 gap-2" data-astro-cid-tjdfhdqb> <a${addAttribute(`/product/${product.id}`, "href")} class="btn-secondary py-2 px-4 text-sm" data-astro-cid-tjdfhdqb>Details</a> <button class="btn-primary py-2 px-4 text-sm add-to-cart-card-btn"${addAttribute(product.id, "data-product-id")}${addAttribute(!product.inStock, "disabled")} data-astro-cid-tjdfhdqb> ${product.inStock ? "Add to Cart" : "Sold Out"} </button> </div> </div> </div> `;
}, "/home/runner/work/nisa/nisa/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
