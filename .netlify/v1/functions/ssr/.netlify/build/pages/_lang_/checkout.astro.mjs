/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getShippingRepository, t, $ as $$Layout, l as locales } from '../../chunks/Layout_qsDO4kKH.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const { lang } = Astro2.params;
  const locale = lang;
  const shippingRepo = await getShippingRepository();
  const shipping = await shippingRepo.getAllRates();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "title": `${t(locale, "checkout.title")} - nisa`, "data-astro-cid-lzblgwac": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-lzblgwac> <h1 class="text-4xl font-medium text-center mb-2" data-astro-cid-lzblgwac>${t(locale, "checkout.title")}</h1> <p class="text-center text-[#6B7B8C] dark:text-[#94a3b8] mb-12" data-astro-cid-lzblgwac>${t(locale, "checkout.subtitle")}</p> <form id="checkout-form" action="https://formspree.io/f/mwprdnqb" method="POST" class="flex flex-col-reverse lg:flex-row gap-12" data-astro-cid-lzblgwac> <div class="w-full lg:w-3/5" data-astro-cid-lzblgwac> <div class="space-y-8" data-astro-cid-lzblgwac> <div data-astro-cid-lzblgwac> <h2 class="text-2xl font-medium mb-4" data-astro-cid-lzblgwac>${t(locale, "checkout.contactInfo")}</h2> <input type="email" name="email"${addAttribute(t(locale, "checkout.email"), "placeholder")} class="form-input" required data-astro-cid-lzblgwac> <input type="tel" name="phoneNumber"${addAttribute(t(locale, "checkout.phone"), "placeholder")} class="form-input mt-4" required data-astro-cid-lzblgwac> </div> <div data-astro-cid-lzblgwac> <h2 class="text-2xl font-medium mb-4" data-astro-cid-lzblgwac>${t(locale, "checkout.shippingAddress")}</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-lzblgwac> <input type="text" name="fullName"${addAttribute(t(locale, "checkout.fullName"), "placeholder")} class="form-input sm:col-span-2" required data-astro-cid-lzblgwac> <input type="text" name="streetAddress"${addAttribute(t(locale, "checkout.streetAddress"), "placeholder")} class="form-input sm:col-span-2" required data-astro-cid-lzblgwac> <input type="text" name="apartment"${addAttribute(t(locale, "checkout.apartment"), "placeholder")} class="form-input sm:col-span-2" data-astro-cid-lzblgwac> <input type="text" name="city"${addAttribute(t(locale, "checkout.city"), "placeholder")} class="form-input" required data-astro-cid-lzblgwac> <select name="governorate" class="form-input" required data-astro-cid-lzblgwac> <option disabled selected value="" data-astro-cid-lzblgwac>${t(locale, "checkout.governorate")}</option> ${shipping.map((s) => renderTemplate`<option${addAttribute(s.city, "value")} data-astro-cid-lzblgwac>${s.city}</option>`)} </select> <textarea name="deliveryInstructions"${addAttribute(t(locale, "checkout.deliveryInstructions"), "placeholder")} rows="3" class="form-input sm:col-span-2" data-astro-cid-lzblgwac></textarea> </div> </div> <input type="hidden" name="orderSummary" id="order-summary-input" data-astro-cid-lzblgwac> <input type="hidden" name="orderTotal" id="order-total-input" data-astro-cid-lzblgwac> <input type="hidden" name="itemsJson" id="items-json-input" data-astro-cid-lzblgwac> <input type="hidden" name="_next"${addAttribute(`/${locale}/thank-you/`, "value")} data-astro-cid-lzblgwac> </div> </div> <div class="w-full lg:w-2/5" data-astro-cid-lzblgwac> <div class="border border-[#D4E4E8] dark:border-[#1b456b] bg-white/50 dark:bg-[#0e2537]/50 rounded-lg p-6 sticky top-24" data-astro-cid-lzblgwac> <h2 class="text-2xl font-medium mb-6" data-astro-cid-lzblgwac>${t(locale, "checkout.orderSummary")}</h2> <div id="checkout-items" class="space-y-4 max-h-64 overflow-y-auto mb-6 pr-2" data-astro-cid-lzblgwac></div> <div class="space-y-2 border-t border-[#D4E4E8] dark:border-[#1b456b] pt-4" data-astro-cid-lzblgwac> <div class="flex justify-between text-[#6B7B8C] dark:text-[#94a3b8]" data-astro-cid-lzblgwac><span data-astro-cid-lzblgwac>${t(locale, "checkout.subtotal")}</span><span id="checkout-subtotal" data-astro-cid-lzblgwac></span></div> <div id="checkout-savings-container" class="flex justify-between text-red-500" style="display: none;" data-astro-cid-lzblgwac><span data-astro-cid-lzblgwac>${t(locale, "checkout.savings")}</span><span id="checkout-savings" data-astro-cid-lzblgwac></span></div> <div class="flex justify-between text-[#6B7B8C] dark:text-[#94a3b8]" data-astro-cid-lzblgwac><span data-astro-cid-lzblgwac>${t(locale, "checkout.shipping")}</span><span id="checkout-shipping" data-astro-cid-lzblgwac></span></div> <div class="flex justify-between font-bold text-lg border-t border-[#D4E4E8] dark:border-[#1b456b] pt-2 mt-2" data-astro-cid-lzblgwac><span data-astro-cid-lzblgwac>${t(locale, "checkout.total")}</span><span id="checkout-total" data-astro-cid-lzblgwac></span></div> </div> <button type="submit" class="btn-primary w-full mt-6" data-astro-cid-lzblgwac>${t(locale, "checkout.placeOrder")}</button> </div> </div> </form> </div> ` })} `;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/checkout.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/[lang]/checkout.astro";
const $$url = "/[lang]/checkout/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
