import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@workly/shared-types': fileURLToPath(new URL('../../packages/shared-types/src', import.meta.url)),
      '@workly/shared-utils': fileURLToPath(new URL('../../packages/shared-utils/src', import.meta.url)),
    },
  },
  server: {
    port: 3004,
  },
});

