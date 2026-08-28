import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Lighthouse's best-practices audit expects source maps for large
    // first-party bundles. Nothing secret ships in this bundle — it's a
    // public marketing site — and the maps are only fetched when devtools
    // are open, so they cost visitors nothing.
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
