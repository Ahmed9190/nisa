import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Jnvq9WFe.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/api/products/_id_.astro.mjs');
const _page2 = () => import('./pages/admin/api/products.astro.mjs');
const _page3 = () => import('./pages/admin/login.astro.mjs');
const _page4 = () => import('./pages/admin/products/new.astro.mjs');
const _page5 = () => import('./pages/admin/products/_id_/delete.astro.mjs');
const _page6 = () => import('./pages/admin/products/_id_.astro.mjs');
const _page7 = () => import('./pages/admin/products.astro.mjs');
const _page8 = () => import('./pages/admin.astro.mjs');
const _page9 = () => import('./pages/_lang_/about.astro.mjs');
const _page10 = () => import('./pages/_lang_/checkout.astro.mjs');
const _page11 = () => import('./pages/_lang_/contact.astro.mjs');
const _page12 = () => import('./pages/_lang_/product/_id_.astro.mjs');
const _page13 = () => import('./pages/_lang_/shop.astro.mjs');
const _page14 = () => import('./pages/_lang_/thank-you.astro.mjs');
const _page15 = () => import('./pages/_lang_.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/api/products/[id].ts", _page1],
    ["src/pages/admin/api/products/index.ts", _page2],
    ["src/pages/admin/login.astro", _page3],
    ["src/pages/admin/products/new.astro", _page4],
    ["src/pages/admin/products/[id]/delete.astro", _page5],
    ["src/pages/admin/products/[id]/index.astro", _page6],
    ["src/pages/admin/products/index.astro", _page7],
    ["src/pages/admin/index.astro", _page8],
    ["src/pages/[lang]/about.astro", _page9],
    ["src/pages/[lang]/checkout.astro", _page10],
    ["src/pages/[lang]/contact.astro", _page11],
    ["src/pages/[lang]/product/[id].astro", _page12],
    ["src/pages/[lang]/shop.astro", _page13],
    ["src/pages/[lang]/thank-you.astro", _page14],
    ["src/pages/[lang]/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "d52c81e0-1304-495f-9bf4-65cb22fa195b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
