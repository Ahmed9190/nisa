import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, m as maybeRenderHead, e as renderComponent } from './astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$ImageUploader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ImageUploader;
  const { colorIndex, color, errors = {} } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="admin-image-uploader" data-image-uploader> <div class="admin-image-list" data-image-list> ', ' </div> <label class="admin-drop-zone" data-drop-zone> <input type="file"', ' accept="image/jpeg,image/png,image/webp,image/gif" multiple hidden> <span>Drop images here or click to upload</span> <small', ">", `</small> </label> </div> <script>
  const uploader = document.currentScript.closest('[data-image-uploader]');
  const list = uploader.querySelector('[data-image-list]');
  const label = uploader.querySelector('[data-drop-zone]');
  const input = uploader.querySelector('input[type="file"]');

  label.addEventListener('dragover', (event) => {
    event.preventDefault();
    label.classList.add('is-dragging');
  });

  label.addEventListener('dragleave', () => {
    label.classList.remove('is-dragging');
  });

  label.addEventListener('drop', (event) => {
    event.preventDefault();
    label.classList.remove('is-dragging');
    const transfer = new DataTransfer();
    Array.from(event.dataTransfer.files).forEach((file) => transfer.items.add(file));
    input.files = transfer.files;
    renderFiles(input.files);
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });

  input.addEventListener('change', () => renderFiles(input.files));

  function renderFiles(files) {
    Array.from(files).forEach((file) => {
      const thumb = document.createElement('div');
      thumb.className = 'admin-image-thumb is-preview';
      thumb.draggable = true;
      const image = document.createElement('img');
      image.src = URL.createObjectURL(file);
      const caption = document.createElement('span');
      caption.textContent = file.name;
      thumb.append(image, caption);
      list.appendChild(thumb);
    });
  }

  let dragged;
  list.addEventListener('dragstart', (event) => {
    dragged = event.target.closest('[data-image-path], .is-preview');
    dragged?.classList.add('is-dragging');
  });

  list.addEventListener('dragend', () => {
    dragged?.classList.remove('is-dragging');
    dragged = null;
  });

  list.addEventListener('dragover', (event) => {
    event.preventDefault();
    const after = getDragAfterElement(list, event.clientY);
    const current = dragged;
    if (!current) return;
    if (after == null) {
      list.appendChild(current);
    } else {
      list.insertBefore(current, after);
    }
  });

  function getDragAfterElement(container, y) {
    return [...container.querySelectorAll('[data-image-path], .is-preview:not(.is-dragging)')]
      .sort((a, b) => {
        const aOffset = y - a.getBoundingClientRect().top;
        const bOffset = y - b.getBoundingClientRect().top;
        return aOffset - bOffset;
      })
      .find((element) => {
        const offset = y - element.getBoundingClientRect().top;
        return offset > 0 && offset < element.getBoundingClientRect().height;
      });
  }
<\/script>`])), maybeRenderHead(), color.images.map((image) => renderTemplate`<div class="admin-image-thumb" draggable="true"${addAttribute(image, "data-image-path")}> <img${addAttribute(image, "src")} alt=""> <span>Drag to reorder</span> </div>`), addAttribute(`images[${colorIndex}]`, "name"), addAttribute(`colors.${colorIndex}.images`, "data-field-error"), errors[`colors.${colorIndex}.images`] || errors["colors.images"]);
}, "C:/Users/HP/Desktop/nisa-website/src/components/admin/ImageUploader.astro", void 0);

const $$Astro$2 = createAstro();
const $$ColorManager = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ColorManager;
  const { colors, errors = {} } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="admin-form-section"> <div class="admin-section-heading"> <h2>Colors</h2> <button type="button" class="admin-secondary-button" data-add-color>Add Color</button> </div> <div class="admin-color-list" data-color-list> ${colors.map((color, index) => renderTemplate`<div class="admin-color-row" data-color-row> <div class="admin-color-fields"> <label>
Color name
<input${addAttribute(`colors[${index}].name`, "name")}${addAttribute(color.name, "value")} required> <small${addAttribute(`colors.${index}.name`, "data-field-error")}>${errors[`colors.${index}.name`] || errors["colors.name"]}</small> </label> <label>
Arabic color name
<input${addAttribute(`colors[${index}].nameAr`, "name")}${addAttribute(color.nameAr || "", "value")}> <small${addAttribute(`colors.${index}.nameAr`, "data-field-error")}>${errors[`colors.${index}.nameAr`] || errors["colors.nameAr"]}</small> </label> <label>
Hex
<input${addAttribute(`colors[${index}].code`, "name")}${addAttribute(color.code, "value")} pattern="#[0-9a-fA-F]{6}" required> <small${addAttribute(`colors.${index}.code`, "data-field-error")}>${errors[`colors.${index}.code`] || errors["colors.code"]}</small> </label> <label class="admin-checkbox"> <input type="checkbox"${addAttribute(`colors[${index}].inStock`, "name")}${addAttribute(Boolean(color.inStock), "checked")}>
In stock
</label> </div> ${renderComponent($$result, "ImageUploader", $$ImageUploader, { "colorIndex": index, "color": color, "errors": errors })} <button type="button" class="admin-danger-button" data-remove-color>Remove</button> </div>`)} </div> </section> <template data-color-template> <div class="admin-color-row" data-color-row> <div class="admin-color-fields"> <label>
Color name
<input name="colors[0].name" required> <small data-field-error="colors.0.name"></small> </label> <label>
Arabic color name
<input name="colors[0].nameAr"> <small data-field-error="colors.0.nameAr"></small> </label> <label>
Hex
<input name="colors[0].code" pattern="#[0-9a-fA-F]{6}" required> <small data-field-error="colors.0.code"></small> </label> <label class="admin-checkbox"> <input type="checkbox" name="colors[0].inStock" checked>
In stock
</label> </div> <div data-image-uploader></div> <button type="button" class="admin-danger-button" data-remove-color>Remove</button> </div> </template> `;
}, "C:/Users/HP/Desktop/nisa-website/src/components/admin/ColorManager.astro", void 0);

const $$Astro$1 = createAstro();
const $$SizeManager = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SizeManager;
  const { sizes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="admin-form-section"> <div class="admin-section-heading"> <h2>Sizes</h2> <button type="button" class="admin-secondary-button" data-add-size>Add Size</button> </div> <div class="admin-size-list" data-size-list> ${sizes.map((size) => renderTemplate`<div class="admin-size-row"> <input name="sizes"${addAttribute(size, "value")} required> <button type="button" class="admin-danger-button" data-remove-size>Remove</button> </div>`)} </div> <small data-field-error="sizes"></small> </section> <template data-size-template> <div class="admin-size-row"> <input name="sizes" required> <button type="button" class="admin-danger-button" data-remove-size>Remove</button> </div> </template> `;
}, "C:/Users/HP/Desktop/nisa-website/src/components/admin/SizeManager.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ProductForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductForm;
  const { product, action, errors = {} } = Astro2.props;
  const defaultProduct = {
    id: "",
    name: "",
    nameAr: "",
    price: 0,
    currency: "EGP",
    description: "",
    descriptionAr: "",
    details: { fabric: "", fit: "", care: "" },
    detailsAr: { fabric: "", fit: "", care: "" },
    sizes: ["One Size"],
    colors: [
      {
        name: "",
        nameAr: "",
        code: "#000000",
        images: [],
        inStock: true
      }
    ],
    category: "",
    featured: false,
    inStock: true,
    sku: "",
    comingSoon: false,
    hidden: false
  };
  const initialProduct = product || defaultProduct;
  const initialJson = JSON.stringify(initialProduct).replace(/</g, "\\u003c");
  const submitLabel = action === "create" ? "Create product" : "Save changes";
  const method = action === "create" ? "POST" : "PUT";
  return renderTemplate(_a || (_a = __template(["", '<form class="admin-product-form" data-product-form', "", "", '> <input type="hidden" name="product"', '> <section class="admin-form-grid"> <div class="admin-form-panel"> <h2>Basic information</h2> <label>\nProduct ID\n<input name="id"', ' placeholder="Auto-generated if empty"> <small data-field-error="id">', '</small> </label> <label>\nEnglish name\n<input name="name"', ' required> <small data-field-error="name">', '</small> </label> <label>\nArabic name\n<input name="nameAr"', '> <small data-field-error="nameAr">', '</small> </label> <label>\nSKU\n<input name="sku"', ' required> <small data-field-error="sku">', '</small> </label> <label>\nCategory\n<input name="category"', ' required> <small data-field-error="category">', '</small> </label> <label>\nPrice\n<input type="number" name="price" min="0" step="0.01"', ' required> <small data-field-error="price">', '</small> </label> <label>\nPrice before\n<input type="number" name="priceBefore" min="0" step="0.01"', '> <small data-field-error="priceBefore">', '</small> </label> <label class="admin-checkbox"> <input type="checkbox" name="featured"', '>\nFeatured\n</label> <label class="admin-checkbox"> <input type="checkbox" name="inStock"', '>\nIn stock\n</label> <label class="admin-checkbox"> <input type="checkbox" name="comingSoon"', '>\nComing soon\n</label> <label class="admin-checkbox"> <input type="checkbox" name="hidden"', '>\nHidden (hide from shop)\n</label> </div> <div class="admin-form-panel"> <h2>Descriptions</h2> <label>\nEnglish description\n<textarea name="description" required>', '</textarea> <small data-field-error="description">', '</small> </label> <label>\nArabic description\n<textarea name="descriptionAr">', '</textarea> <small data-field-error="descriptionAr">', '</small> </label> <label>\nFabric\n<textarea name="details.fabric" required>', '</textarea> <small data-field-error="details.fabric">', '</small> </label> <label>\nFit\n<textarea name="details.fit" required>', '</textarea> <small data-field-error="details.fit">', '</small> </label> <label>\nCare\n<textarea name="details.care" required>', '</textarea> <small data-field-error="details.care">', '</small> </label> <label>\nArabic fabric\n<textarea name="detailsAr.fabric">', '</textarea> <small data-field-error="detailsAr.fabric">', '</small> </label> <label>\nArabic fit\n<textarea name="detailsAr.fit">', '</textarea> <small data-field-error="detailsAr.fit">', '</small> </label> <label>\nArabic care\n<textarea name="detailsAr.care">', '</textarea> <small data-field-error="detailsAr.care">', "</small> </label> </div> </section> ", " ", ' <div class="admin-form-actions"> <a class="admin-secondary-button" href="/admin/products/">Cancel</a> <button class="admin-primary-button" type="submit">', "</button> </div> <p class=\"admin-form-error\" data-form-error hidden></p> </form> <script>\n  const form = document.querySelector('[data-product-form]');\n  const formError = form.querySelector('[data-form-error]');\n  let dirty = false;\n\n  form.addEventListener('input', () => markDirty());\n  form.addEventListener('change', () => markDirty());\n\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    formError.hidden = true;\n\n    if (!form.reportValidity()) {\n      return;\n    }\n\n    const payload = collectPayload();\n    form.querySelector('[name=\"product\"]').value = JSON.stringify(payload);\n\n    const csrf = getCookie('csrf_token');\n    const response = await fetch(form.dataset.action, {\n      method: form.dataset.method,\n      headers: {\n        'x-csrf-token': csrf || '',\n      },\n      body: new FormData(form),\n    });\n\n    const data = await response.json().catch(() => ({}));\n\n    if (!response.ok) {\n      showValidationErrors(data.details || {});\n      formError.textContent = data.error || 'Request failed';\n      formError.hidden = false;\n      window.showAdminToast?.(data.error || 'Product was not saved', 'error');\n      return;\n    }\n\n    dirty = false;\n    window.showAdminToast?.('Product saved', 'success');\n    if (form.dataset.action.includes('/new/')) {\n      setTimeout(() => {\n        window.location.href = '/admin/products/';\n      }, 500);\n    }\n  });\n\n  document.querySelectorAll('a[href^=\"/admin/\"]:not([href=\"/admin/logout\"])').forEach((link) => {\n    link.addEventListener('click', (event) => {\n      if (!dirty) return;\n      if (!window.confirm('Leave site? Changes may not be saved')) {\n        event.preventDefault();\n      }\n    });\n  });\n\n  window.addEventListener('beforeunload', (event) => {\n    if (!dirty) return;\n    event.preventDefault();\n    event.returnValue = '';\n  });\n\n  function markDirty() {\n    dirty = true;\n  }\n\n  function collectPayload() {\n    const payload = JSON.parse(form.querySelector('[name=\"product\"]').value || '{}');\n\n    set(payload, 'id', value('id'));\n    set(payload, 'name', value('name'));\n    set(payload, 'nameAr', value('nameAr'));\n    set(payload, 'sku', value('sku'));\n    set(payload, 'category', value('category'));\n    set(payload, 'price', numberValue('price'));\n    set(payload, 'priceBefore', optionalNumber('priceBefore'));\n    set(payload, 'currency', 'EGP');\n    set(payload, 'description', value('description'));\n    set(payload, 'descriptionAr', value('descriptionAr'));\n    set(payload, 'details.fabric', value('details.fabric'));\n    set(payload, 'details.fit', value('details.fit'));\n    set(payload, 'details.care', value('details.care'));\n    set(payload, 'detailsAr.fabric', value('detailsAr.fabric'));\n    set(payload, 'detailsAr.fit', value('detailsAr.fit'));\n    set(payload, 'detailsAr.care', value('detailsAr.care'));\n    set(payload, 'featured', checked('featured'));\n    set(payload, 'inStock', checked('inStock'));\n    set(payload, 'comingSoon', checked('comingSoon'));\n    set(payload, 'hidden', checked('hidden'));\n    set(payload, 'sizes', [...form.querySelectorAll('[name=\"sizes\"]')].map((input) => input.value).filter(Boolean));\n\n    const colors = [...form.querySelectorAll('[data-color-row]')].map((row, index) => {\n      const images = [...row.querySelectorAll('[data-image-path]')].map((image) => image.dataset.imagePath);\n      const getName = (field) => row.querySelector(`[name=\"colors[${index}].${field}\"]`)?.value || '';\n      const getCheck = (field) => Boolean(row.querySelector(`[name=\"colors[${index}].${field}\"]`)?.checked);\n      return {\n        name: getName('name'),\n        nameAr: getName('nameAr'),\n        code: getName('code'),\n        images,\n        inStock: getCheck('inStock'),\n      };\n    });\n\n    set(payload, 'colors', colors);\n    return payload;\n  }\n\n  function value(name) {\n    return form.querySelector(`[name=\"${name}\"]`)?.value || '';\n  }\n\n  function numberValue(name) {\n    return Number(value(name) || 0);\n  }\n\n  function optionalNumber(name) {\n    const value = form.querySelector(`[name=\"${name}\"]`)?.value;\n    return value ? Number(value) : undefined;\n  }\n\n  function checked(name) {\n    return Boolean(form.querySelector(`[name=\"${name}\"]`)?.checked);\n  }\n\n  function set(object, path, value) {\n    const parts = path.split('.');\n    let cursor = object;\n    parts.slice(0, -1).forEach((part) => {\n      cursor[part] = cursor[part] || {};\n      cursor = cursor[part];\n    });\n    cursor[parts.at(-1)] = value;\n  }\n\n  function showValidationErrors(details) {\n    form.querySelectorAll('[data-field-error]').forEach((element) => {\n      element.textContent = '';\n      const label = element.closest('label');\n      if (label) {\n        label.classList.remove('has-error');\n      }\n    });\n    Object.entries(details).forEach(([path, message]) => {\n      let element = form.querySelector(`[data-field-error=\"${path}\"]`);\n      let currentPath = path;\n      \n      while (!element && currentPath.includes('.')) {\n        currentPath = currentPath.substring(0, currentPath.lastIndexOf('.'));\n        element = form.querySelector(`[data-field-error=\"${currentPath}\"]`);\n      }\n\n      if (element) {\n        element.textContent = message;\n        const label = element.closest('label');\n        if (label) {\n          label.classList.add('has-error');\n        }\n      }\n    });\n  }\n\n  function getCookie(name) {\n    return document.cookie.split('; ').find((cookie) => cookie.startsWith(`${name}=`))?.split('=')[1] || '';\n  }\n<\/script>"], ["", '<form class="admin-product-form" data-product-form', "", "", '> <input type="hidden" name="product"', '> <section class="admin-form-grid"> <div class="admin-form-panel"> <h2>Basic information</h2> <label>\nProduct ID\n<input name="id"', ' placeholder="Auto-generated if empty"> <small data-field-error="id">', '</small> </label> <label>\nEnglish name\n<input name="name"', ' required> <small data-field-error="name">', '</small> </label> <label>\nArabic name\n<input name="nameAr"', '> <small data-field-error="nameAr">', '</small> </label> <label>\nSKU\n<input name="sku"', ' required> <small data-field-error="sku">', '</small> </label> <label>\nCategory\n<input name="category"', ' required> <small data-field-error="category">', '</small> </label> <label>\nPrice\n<input type="number" name="price" min="0" step="0.01"', ' required> <small data-field-error="price">', '</small> </label> <label>\nPrice before\n<input type="number" name="priceBefore" min="0" step="0.01"', '> <small data-field-error="priceBefore">', '</small> </label> <label class="admin-checkbox"> <input type="checkbox" name="featured"', '>\nFeatured\n</label> <label class="admin-checkbox"> <input type="checkbox" name="inStock"', '>\nIn stock\n</label> <label class="admin-checkbox"> <input type="checkbox" name="comingSoon"', '>\nComing soon\n</label> <label class="admin-checkbox"> <input type="checkbox" name="hidden"', '>\nHidden (hide from shop)\n</label> </div> <div class="admin-form-panel"> <h2>Descriptions</h2> <label>\nEnglish description\n<textarea name="description" required>', '</textarea> <small data-field-error="description">', '</small> </label> <label>\nArabic description\n<textarea name="descriptionAr">', '</textarea> <small data-field-error="descriptionAr">', '</small> </label> <label>\nFabric\n<textarea name="details.fabric" required>', '</textarea> <small data-field-error="details.fabric">', '</small> </label> <label>\nFit\n<textarea name="details.fit" required>', '</textarea> <small data-field-error="details.fit">', '</small> </label> <label>\nCare\n<textarea name="details.care" required>', '</textarea> <small data-field-error="details.care">', '</small> </label> <label>\nArabic fabric\n<textarea name="detailsAr.fabric">', '</textarea> <small data-field-error="detailsAr.fabric">', '</small> </label> <label>\nArabic fit\n<textarea name="detailsAr.fit">', '</textarea> <small data-field-error="detailsAr.fit">', '</small> </label> <label>\nArabic care\n<textarea name="detailsAr.care">', '</textarea> <small data-field-error="detailsAr.care">', "</small> </label> </div> </section> ", " ", ' <div class="admin-form-actions"> <a class="admin-secondary-button" href="/admin/products/">Cancel</a> <button class="admin-primary-button" type="submit">', "</button> </div> <p class=\"admin-form-error\" data-form-error hidden></p> </form> <script>\n  const form = document.querySelector('[data-product-form]');\n  const formError = form.querySelector('[data-form-error]');\n  let dirty = false;\n\n  form.addEventListener('input', () => markDirty());\n  form.addEventListener('change', () => markDirty());\n\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    formError.hidden = true;\n\n    if (!form.reportValidity()) {\n      return;\n    }\n\n    const payload = collectPayload();\n    form.querySelector('[name=\"product\"]').value = JSON.stringify(payload);\n\n    const csrf = getCookie('csrf_token');\n    const response = await fetch(form.dataset.action, {\n      method: form.dataset.method,\n      headers: {\n        'x-csrf-token': csrf || '',\n      },\n      body: new FormData(form),\n    });\n\n    const data = await response.json().catch(() => ({}));\n\n    if (!response.ok) {\n      showValidationErrors(data.details || {});\n      formError.textContent = data.error || 'Request failed';\n      formError.hidden = false;\n      window.showAdminToast?.(data.error || 'Product was not saved', 'error');\n      return;\n    }\n\n    dirty = false;\n    window.showAdminToast?.('Product saved', 'success');\n    if (form.dataset.action.includes('/new/')) {\n      setTimeout(() => {\n        window.location.href = '/admin/products/';\n      }, 500);\n    }\n  });\n\n  document.querySelectorAll('a[href^=\"/admin/\"]:not([href=\"/admin/logout\"])').forEach((link) => {\n    link.addEventListener('click', (event) => {\n      if (!dirty) return;\n      if (!window.confirm('Leave site? Changes may not be saved')) {\n        event.preventDefault();\n      }\n    });\n  });\n\n  window.addEventListener('beforeunload', (event) => {\n    if (!dirty) return;\n    event.preventDefault();\n    event.returnValue = '';\n  });\n\n  function markDirty() {\n    dirty = true;\n  }\n\n  function collectPayload() {\n    const payload = JSON.parse(form.querySelector('[name=\"product\"]').value || '{}');\n\n    set(payload, 'id', value('id'));\n    set(payload, 'name', value('name'));\n    set(payload, 'nameAr', value('nameAr'));\n    set(payload, 'sku', value('sku'));\n    set(payload, 'category', value('category'));\n    set(payload, 'price', numberValue('price'));\n    set(payload, 'priceBefore', optionalNumber('priceBefore'));\n    set(payload, 'currency', 'EGP');\n    set(payload, 'description', value('description'));\n    set(payload, 'descriptionAr', value('descriptionAr'));\n    set(payload, 'details.fabric', value('details.fabric'));\n    set(payload, 'details.fit', value('details.fit'));\n    set(payload, 'details.care', value('details.care'));\n    set(payload, 'detailsAr.fabric', value('detailsAr.fabric'));\n    set(payload, 'detailsAr.fit', value('detailsAr.fit'));\n    set(payload, 'detailsAr.care', value('detailsAr.care'));\n    set(payload, 'featured', checked('featured'));\n    set(payload, 'inStock', checked('inStock'));\n    set(payload, 'comingSoon', checked('comingSoon'));\n    set(payload, 'hidden', checked('hidden'));\n    set(payload, 'sizes', [...form.querySelectorAll('[name=\"sizes\"]')].map((input) => input.value).filter(Boolean));\n\n    const colors = [...form.querySelectorAll('[data-color-row]')].map((row, index) => {\n      const images = [...row.querySelectorAll('[data-image-path]')].map((image) => image.dataset.imagePath);\n      const getName = (field) => row.querySelector(\\`[name=\"colors[\\${index}].\\${field}\"]\\`)?.value || '';\n      const getCheck = (field) => Boolean(row.querySelector(\\`[name=\"colors[\\${index}].\\${field}\"]\\`)?.checked);\n      return {\n        name: getName('name'),\n        nameAr: getName('nameAr'),\n        code: getName('code'),\n        images,\n        inStock: getCheck('inStock'),\n      };\n    });\n\n    set(payload, 'colors', colors);\n    return payload;\n  }\n\n  function value(name) {\n    return form.querySelector(\\`[name=\"\\${name}\"]\\`)?.value || '';\n  }\n\n  function numberValue(name) {\n    return Number(value(name) || 0);\n  }\n\n  function optionalNumber(name) {\n    const value = form.querySelector(\\`[name=\"\\${name}\"]\\`)?.value;\n    return value ? Number(value) : undefined;\n  }\n\n  function checked(name) {\n    return Boolean(form.querySelector(\\`[name=\"\\${name}\"]\\`)?.checked);\n  }\n\n  function set(object, path, value) {\n    const parts = path.split('.');\n    let cursor = object;\n    parts.slice(0, -1).forEach((part) => {\n      cursor[part] = cursor[part] || {};\n      cursor = cursor[part];\n    });\n    cursor[parts.at(-1)] = value;\n  }\n\n  function showValidationErrors(details) {\n    form.querySelectorAll('[data-field-error]').forEach((element) => {\n      element.textContent = '';\n      const label = element.closest('label');\n      if (label) {\n        label.classList.remove('has-error');\n      }\n    });\n    Object.entries(details).forEach(([path, message]) => {\n      let element = form.querySelector(\\`[data-field-error=\"\\${path}\"]\\`);\n      let currentPath = path;\n      \n      while (!element && currentPath.includes('.')) {\n        currentPath = currentPath.substring(0, currentPath.lastIndexOf('.'));\n        element = form.querySelector(\\`[data-field-error=\"\\${currentPath}\"]\\`);\n      }\n\n      if (element) {\n        element.textContent = message;\n        const label = element.closest('label');\n        if (label) {\n          label.classList.add('has-error');\n        }\n      }\n    });\n  }\n\n  function getCookie(name) {\n    return document.cookie.split('; ').find((cookie) => cookie.startsWith(\\`\\${name}=\\`))?.split('=')[1] || '';\n  }\n<\/script>"])), maybeRenderHead(), addAttribute(Astro2.url.pathname === "/admin/products/new/" ? "/admin/api/products/" : `/admin/api/products/${initialProduct.id}/`, "data-action"), addAttribute(method, "data-method"), addAttribute(initialJson, "data-initial"), addAttribute(initialJson, "value"), addAttribute(initialProduct.id, "value"), errors.id, addAttribute(initialProduct.name, "value"), errors.name, addAttribute(initialProduct.nameAr || "", "value"), errors.nameAr, addAttribute(initialProduct.sku, "value"), errors.sku, addAttribute(initialProduct.category, "value"), errors.category, addAttribute(initialProduct.price, "value"), errors.price, addAttribute(initialProduct.priceBefore || "", "value"), errors.priceBefore, addAttribute(initialProduct.featured, "checked"), addAttribute(initialProduct.inStock, "checked"), addAttribute(initialProduct.comingSoon || false, "checked"), addAttribute(initialProduct.hidden || false, "checked"), initialProduct.description, errors.description, initialProduct.descriptionAr || "", errors.descriptionAr, initialProduct.details.fabric, errors["details.fabric"], initialProduct.details.fit, errors["details.fit"], initialProduct.details.care, errors["details.care"], initialProduct.detailsAr?.fabric || "", errors["detailsAr.fabric"], initialProduct.detailsAr?.fit || "", errors["detailsAr.fit"], initialProduct.detailsAr?.care || "", errors["detailsAr.care"], renderComponent($$result, "SizeManager", $$SizeManager, { "sizes": initialProduct.sizes }), renderComponent($$result, "ColorManager", $$ColorManager, { "colors": initialProduct.colors, "errors": errors }), submitLabel);
}, "C:/Users/HP/Desktop/nisa-website/src/components/admin/ProductForm.astro", void 0);

export { $$ProductForm as $ };
