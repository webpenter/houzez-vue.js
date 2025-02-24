import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Optional: add any other aliases if needed
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "~leaflet/dist/leaflet.css"; // Import Leaflet CSS globally
        `,
      },
    },
  },
})
