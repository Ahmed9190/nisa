/* empty css                                    */
import { c as createComponent, a as createAstro, d as renderHead, r as renderTemplate } from '../../chunks/astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const error = Astro2.url.searchParams.get("error");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Admin Login — Nisa</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">${renderHead()}</head> <body class="h-screen bg-gray-50 flex items-center justify-center"> <form class="bg-white shadow rounded-lg p-8 max-w-sm w-full" method="POST" action="/admin/login/"> <h1 class="text-2xl font-medium mb-6">Admin Login</h1> ${error && renderTemplate`<p class="text-red-600 mb-4 text-sm">${error}</p>`} <label class="block mb-4"> <span class="text-sm text-gray-600">Password</span> <input type="password" name="password" class="mt-1 block w-full border rounded px-3 py-2" required autofocus> </label> <button type="submit" class="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Login</button> </form> </body></html>`;
}, "C:/Users/HP/Desktop/nisa-website/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/HP/Desktop/nisa-website/src/pages/admin/login.astro";
const $$url = "/admin/login/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
