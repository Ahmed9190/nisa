import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const projectRoot = (() => {
  const url = fileURLToPath(import.meta.url);
  return url.includes('/dist/') ? process.cwd() : path.resolve(url, '../../..');
})();
const imageRoot = path.join(projectRoot, 'public/images/products');

export interface UploadedImageGroup {
  colorIndex: number;
  files: File[];
}

export async function parseUploadedImages(formData: FormData): Promise<UploadedImageGroup[]> {
  const groups = new Map<number, File[]>();

  for (const [key, value] of formData.entries()) {
    if (!(value instanceof File) || !key.startsWith('images[')) {
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

export async function saveUploadedImages(productId: string, colorName: string, files: File[], startIndex = 0): Promise<string[]> {
  const paths: string[] = [];

  for (const [offset, file] of files.entries()) {
    validateImageFile(file);
    const index = startIndex + offset;
    const extension = path.extname(sanitizeFilename(file.name)).toLowerCase() || '.webp';
    const fileName = `${slugify(productId)}-${slugify(colorName)}-${index + 1}${extension}`;
    const filePath = path.join(imageRoot, fileName);

    await mkdir(imageRoot, { recursive: true });
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    paths.push(`/images/products/${fileName}`);
  }

  return paths;
}

export function validateImageFile(file: File): void {
  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    throw new Error('Only image files allowed');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File too large (max 5MB)');
  }
}

export function sanitizeFilename(fileName: string): string {
  return path.basename(fileName).replace(/[^a-z0-9._-]/gi, '-').replace(/-+/g, '-');
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'image';
}
