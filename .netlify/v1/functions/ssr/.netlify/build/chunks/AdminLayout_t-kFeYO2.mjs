import { c as createComponent, a as createAstro, r as renderTemplate, f as renderSlot, b as addAttribute, d as renderHead } from './astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title, active = "dashboard" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', " \u2014 Nisa Admin</title>", '</head> <body> <div class="admin-shell"> <aside class="admin-sidebar" data-sidebar> <a class="admin-logo" href="/admin/">Nisa Admin</a> <nav class="admin-nav"> <a', ' href="/admin/">Dashboard</a> <a', ' href="/admin/products/">Products</a> </nav> <button class="admin-sidebar-close" type="button" data-close-sidebar>Close</button> </aside> <main class="admin-main"> <header class="admin-header"> <button class="admin-menu-button" type="button" data-open-sidebar aria-label="Open menu">\u2630</button> <div class="admin-header-spacer"></div> <a class="admin-logout" href="/admin/logout">Logout</a> </header> <section class="admin-content"> <div class="admin-page-heading"> <div> <p class="admin-eyebrow">Admin</p> <h1>', "</h1> </div> </div> ", ` </section> </main> </div> <div class="admin-toast" data-toast hidden></div> <div class="admin-modal-backdrop" data-modal-backdrop hidden> <div class="admin-modal" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title"> <h2 id="confirm-modal-title">Delete product?</h2> <p>This action cannot be undone.</p> <div class="admin-modal-actions"> <button type="button" data-modal-cancel>Cancel</button> <button type="button" class="admin-danger" data-modal-confirm>Delete</button> </div> </div> </div> <script>
    const sidebar = document.querySelector('[data-sidebar]');
    const openButton = document.querySelector('[data-open-sidebar]');
    const closeButton = document.querySelector('[data-close-sidebar]');
    const modalBackdrop = document.querySelector('[data-modal-backdrop]');
    const modalCancel = document.querySelector('[data-modal-cancel]');
    const modalConfirm = document.querySelector('[data-modal-confirm]');

    openButton?.addEventListener('click', () => sidebar?.classList.add('is-open'));
    closeButton?.addEventListener('click', () => sidebar?.classList.remove('is-open'));

    function closeModal() {
      if (modalBackdrop) modalBackdrop.hidden = true;
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        sidebar?.classList.remove('is-open');
        closeModal();
      }
    });

    modalCancel?.addEventListener('click', closeModal);
    modalConfirm?.addEventListener('click', closeModal);
    modalBackdrop?.addEventListener('click', (event) => {
      if (event.target === modalBackdrop) closeModal();
    });

    window.showAdminConfirm = (message, onConfirm) => {
      if (modalBackdrop) {
        const title = modalBackdrop.querySelector('#confirm-modal-title');
        const msg = modalBackdrop.querySelector('p');
        if (title) title.textContent = 'Delete product?';
        if (msg) msg.textContent = message || 'This action cannot be undone.';
        modalBackdrop.hidden = false;
        const handler = () => {
          closeModal();
          modalConfirm?.removeEventListener('click', handler);
          onConfirm?.();
        };
        modalConfirm?.addEventListener('click', handler, { once: true });
      }
    };
  <\/script> </body> </html>`])), title, renderHead(), addAttribute(["dashboard"].includes(active), "class:list"), addAttribute(["products"].includes(active), "class:list"), title, renderSlot($$result, $$slots["default"]));
}, "C:/Users/HP/Desktop/nisa-website/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
