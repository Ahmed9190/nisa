import { a as parseProductForm, s as slugify$1 } from './product-store_DzXRAkIU.mjs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = /* @__PURE__ */ new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const projectRoot = (() => {
  const url = fileURLToPath(import.meta.url);
  return url.includes("/dist/") ? process.cwd() : path.resolve(url, "../../..");
})();
const imageRoot = path.join(projectRoot, "public/images/products");
async function parseUploadedImages(formData) {
  const groups = /* @__PURE__ */ new Map();
  for (const [key, value] of formData.entries()) {
    if (!(value instanceof File) || !key.startsWith("images[")) {
      continue;
    }
    if (value.size === 0 || value.name === "") {
      continue;
    }
    const match = key.match(/^images\[(\d+)\]$/);
    if (!match) {
      continue;
    }
    const colorIndex = Number(match[1]);
    const files = groups.get(colorIndex) || [];
    files.push(value);
    groups.set(colorIndex, files);
  }
  return Array.from(groups.entries()).map(([colorIndex, files]) => ({ colorIndex, files }));
}
async function saveUploadedImages(productId, colorName, files, startIndex = 0) {
  const paths = [];
  for (const [offset, file] of files.entries()) {
    validateImageFile(file);
    const index = startIndex + offset;
    const extension = path.extname(sanitizeFilename(file.name)).toLowerCase() || ".webp";
    const fileName = `${slugify(productId)}-${slugify(colorName)}-${index + 1}${extension}`;
    const filePath = path.join(imageRoot, fileName);
    await mkdir(imageRoot, { recursive: true });
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    paths.push(`/images/products/${fileName}`);
  }
  return paths;
}
function validateImageFile(file) {
  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    throw new Error("Only image files allowed");
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File too large (max 5MB)");
  }
}
function sanitizeFilename(fileName) {
  return path.basename(fileName).replace(/[^a-z0-9._-]/gi, "-").replace(/-+/g, "-");
}
function slugify(value) {
  return value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "image";
}

async function productInputFromFormData(formData, existingId) {
  const product = parseProductForm(formData);
  const groups = await parseUploadedImages(formData);
  if (existingId) {
    product.id = existingId;
  } else {
    product.id = product.id || slugify$1(product.name);
  }
  for (const group of groups) {
    const color = product.colors[group.colorIndex];
    if (!color) {
      continue;
    }
    const uploadedPaths = await saveUploadedImages(product.id, color.name, group.files, color.images.length);
    color.images.push(...uploadedPaths);
  }
  return product;
}
async function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json"
    }
  });
}

export { jsonResponse as j, productInputFromFormData as p };
