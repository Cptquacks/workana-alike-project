import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { wayfinder } from '@laravel/vite-plugin-wayfinder'
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.scss', 'resources/js/app.ts'],
      refresh: true,
    }),
    vue(),
    wayfinder({
      path: 'resources/js/api/wayfinder',
      command: 'php artisan wayfinder:generate --path=resources/js/api/wayfinder --skip-routes',
      routes: false,
      actions: true,
      formVariants: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
    },
  },
});
