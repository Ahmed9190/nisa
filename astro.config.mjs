import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'always',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/asset.[hash][extname]',
          chunkFileNames: 'assets/chunk.[hash].js',
          entryFileNames: 'assets/entry.[hash].js',
        },
      },
    },
  },
});