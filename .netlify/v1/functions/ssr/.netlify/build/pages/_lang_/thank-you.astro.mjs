/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { t, $ as $$Layout, l as locales } from '../../chunks/Layout_qsDO4kKH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThankYou;
  const { lang } = Astro2.params;
  const locale = lang;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "title": `${t(locale, "thankYou.title")} - nisa` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"> <h1 class="text-4xl font-medium text-center mb-2">${t(locale, "thankYou.title")}</h1> <p class="text-center text-[#6B7B8C] dark:text-[#94a3b8] mb-12">${t(locale, "thankYou.message")}</p> <a${addAttribute(`/${locale}/shop/`, "href")} class="text-blue-500 hover:underline">${t(locale, "thankYou.continueShopping")}</a> </div> ` })}`;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/thank-you.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/thank-you.astro";
const $$url = "/[lang]/thank-you/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
