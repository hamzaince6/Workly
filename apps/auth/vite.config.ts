import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => {
  // Root .env dosyasını yükle
  const env = loadEnv(mode, process.cwd() + '/../..', '');
  
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@workly/shared-types': fileURLToPath(new URL('../../packages/shared-types/src', import.meta.url)),
        '@workly/shared-utils': fileURLToPath(new URL('../../packages/shared-utils/src', import.meta.url)),
      },
    },
    server: {
      port: 3001,
      cors: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
          },
        },
      },
    },
    base: '/',
    // Root .env'den environment variables'ları expose et
    define: {
      'import.meta.env.VITE_SHELL_URL': JSON.stringify(env.VITE_SHELL_URL),
      'import.meta.env.VITE_AUTH_URL': JSON.stringify(env.VITE_AUTH_URL),
    },
  };
});

