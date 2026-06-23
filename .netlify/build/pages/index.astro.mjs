/* empty css                                 */
import { c as createComponent, d as renderHead, r as renderTemplate } from '../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><meta charset="utf-8"><title>nisa</title><meta http-equiv="refresh" content="0;url=/en/">${renderHead()}</head> <body> <a href="/en/">English</a> | <a href="/ar/">العربية</a> </body></html>`;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
