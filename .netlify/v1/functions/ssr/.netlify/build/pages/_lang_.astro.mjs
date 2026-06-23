/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as getContentRepository, a as getProductRepository, $ as $$Layout, l as locales, t } from '../chunks/Layout_qsDO4kKH.mjs';
import 'clsx';
import { $ as $$ProductCard } from '../chunks/ProductCard_hHpup7R8.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { backgroundImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="hero-container" class="relative text-center text-white h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#D4E4E8] dark:border-[#1b456b]"> <img${addAttribute(backgroundImage, "src")} alt="Modest fashion cover" class="absolute inset-0 w-full h-full object-cover -z-20 transition-transform duration-[15000ms] ease-out hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 -z-15"></div> <canvas id="hero-particles" class="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-60 dark:opacity-80"></canvas> <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 px-4"> <div class="border border-white/20 p-8 md:p-14 backdrop-blur-[1px] rounded-sm transition-all duration-700 hover:border-white/40"> <h1 class="text-6xl md:text-8xl font-serif tracking-[0.2em] md:tracking-[0.35em] font-light uppercase text-white drop-shadow-md leading-none select-none">
nisa
</h1> <p class="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.6em] text-white/90 font-light uppercase mt-6 select-none">
Not for every eye
</p> </div> <div class="absolute bottom-[-12vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse opacity-75 hidden md:flex"> <span class="text-[9px] uppercase tracking-[0.3em] font-light text-white/80">Scroll</span> <svg class="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </div> </div> `;
}, "C:/Users/HP/Desktop/nisa-website/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const locale = lang;
  const contentRepo = await getContentRepository();
  const productRepo = await getProductRepository(locale);
  const content = await contentRepo.getHomeContent();
  const featuredProducts = await Promise.all(
    content.featuredCollection.featuredProductIds.map(
      (id) => productRepo.getById(id)
    )
  );
  const validFeaturedProducts = featuredProducts.filter(Boolean);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "data-astro-cid-ct3bgug4": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": content.hero.backgroundImage, "data-astro-cid-ct3bgug4": true })}  ${maybeRenderHead()}<section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12 overflow-hidden" data-astro-cid-ct3bgug4> <div class="text-center mb-16 reveal-on-scroll" data-astro-cid-ct3bgug4> <h2 class="text-3xl md:text-4xl font-serif font-light text-[#204566] dark:text-white tracking-wide" data-astro-cid-ct3bgug4>${t(locale, "home.featuredCollection.title")}</h2> <div class="w-12 h-[1px] bg-[#204566] dark:bg-[#3182ce] mx-auto mt-4" data-astro-cid-ct3bgug4></div> </div> <div class="featured-grid reveal-on-scroll transition-delay-300" data-astro-cid-ct3bgug4> ${validFeaturedProducts.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "locale": locale, "data-astro-cid-ct3bgug4": true })}`)} </div> <div class="text-center mt-16 reveal-on-scroll transition-delay-500" data-astro-cid-ct3bgug4> <a${addAttribute(`/${locale}/shop/`, "href")} class="btn-secondary text-sm uppercase tracking-wider" data-astro-cid-ct3bgug4>${t(locale, "home.featuredCollection.buttonText")}</a> </div> </section>  <section class="relative my-24 h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden" data-astro-cid-ct3bgug4> <img src="/assets/products/thorya arabian abaya/dsc-0114-medium-68e15a1d2adb3.webp" alt="Featured Collection" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-105" data-astro-cid-ct3bgug4> <div class="absolute inset-0 bg-black/45" data-astro-cid-ct3bgug4></div> <div class="relative z-10 text-center text-white px-4 reveal-on-scroll" data-astro-cid-ct3bgug4> <h2 class="text-4xl md:text-6xl font-sans tracking-[0.25em] font-extrabold uppercase mb-4 text-white/95" data-astro-cid-ct3bgug4> ${t(locale, "home.collectionBanner.title")} </h2> <p class="text-sm md:text-lg tracking-widest font-light mb-8 max-w-lg mx-auto text-white/90" data-astro-cid-ct3bgug4> ${t(locale, "home.collectionBanner.subtitle")} </p> <a${addAttribute(`/${locale}/shop/`, "href")} class="inline-block px-8 py-3.5 border border-white text-white uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105" data-astro-cid-ct3bgug4> ${t(locale, "home.collectionBanner.buttonText")} </a> </div> </section>  <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24 overflow-hidden" data-astro-cid-ct3bgug4> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center" data-astro-cid-ct3bgug4> <!-- Staggered Image Grid --> <div class="grid grid-cols-2 gap-4 reveal-on-scroll" data-astro-cid-ct3bgug4> <div class="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800 shadow-sm" data-astro-cid-ct3bgug4> <img src="/assets/products/dahlia set/img-2049-medium-68d867ff7d9b3.webp" alt="Linen Style" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-astro-cid-ct3bgug4> </div> <div class="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800 shadow-sm mt-8" data-astro-cid-ct3bgug4> <img src="/assets/products/opal cardigan/816df0a0-3e30-4ce4-8c6a-1cbd49eaf4f61-medium-68d72c785a9a8.webp" alt="Embroidery Detail" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-astro-cid-ct3bgug4> </div> </div> <!-- Story Content --> <div class="flex flex-col justify-center reveal-on-scroll transition-delay-300" data-astro-cid-ct3bgug4> <h3 class="text-3xl md:text-4xl font-serif font-light text-[#204566] dark:text-white tracking-wide leading-tight mb-2" data-astro-cid-ct3bgug4> ${t(locale, "home.story.title")} </h3> <div class="w-12 h-[1px] bg-[#204566] dark:bg-[#3182ce] mb-8" data-astro-cid-ct3bgug4></div> <p class="text-base font-light text-[#6B7B8C] dark:text-gray-300 leading-relaxed mb-8" data-astro-cid-ct3bgug4> ${t(locale, "home.story.subtitle")} </p> <div data-astro-cid-ct3bgug4> <a${addAttribute(`/${locale}/about/`, "href")} class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#204566] dark:text-[#3182ce] group" data-astro-cid-ct3bgug4> <span data-astro-cid-ct3bgug4>${t(locale, "home.story.buttonText")}</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ct3bgug4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ct3bgug4></path> </svg> </a> </div> </div> </div> </section> ` })} `;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/index.astro";
const $$url = "/[lang]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
