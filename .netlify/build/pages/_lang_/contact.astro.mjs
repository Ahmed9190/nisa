/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { t, $ as $$Layout, l as locales } from '../../chunks/Layout_qsDO4kKH.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang } = Astro2.params;
  const locale = lang;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "title": `${t(locale, "contact.title")} - nisa`, "data-astro-cid-6zvldpif": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-6zvldpif> <div class="max-w-xl mx-auto" data-astro-cid-6zvldpif> <h1 class="text-4xl font-medium text-center mb-8" data-astro-cid-6zvldpif>${t(locale, "contact.title")}</h1> <form id="contact-form" action="https://formspree.io/f/xldpywlk" method="POST" class="space-y-6" data-astro-cid-6zvldpif> <div data-astro-cid-6zvldpif> <label for="name" class="block font-medium mb-2" data-astro-cid-6zvldpif>${t(locale, "contact.form.name")}</label> <input type="text" id="name" name="name" class="w-full p-3 border border-[#D4E4E8] rounded-md focus:border-[#204566] focus:ring focus:ring-[#204566]/20 outline-none transition" data-astro-cid-6zvldpif> </div> <div data-astro-cid-6zvldpif> <label for="email" class="block font-medium mb-2" data-astro-cid-6zvldpif>${t(locale, "contact.form.email")}</label> <input type="email" id="email" name="email" class="w-full p-3 border border-[#D4E4E8] rounded-md focus:border-[#204566] focus:ring focus:ring-[#204566]/20 outline-none transition" data-astro-cid-6zvldpif> </div> <div data-astro-cid-6zvldpif> <label for="message" class="block font-medium mb-2" data-astro-cid-6zvldpif>${t(locale, "contact.form.message")}</label> <textarea id="message" name="message" rows="5" class="w-full p-3 border border-[#D4E4E8] rounded-md focus:border-[#204566] focus:ring focus:ring-[#204566]/20 outline-none transition" data-astro-cid-6zvldpif></textarea> </div> <div class="text-center" data-astro-cid-6zvldpif> <button type="submit" class="btn-primary" data-astro-cid-6zvldpif>${t(locale, "contact.form.submit")}</button> </div> </form> </div> </div> ` })}  `;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/contact.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
