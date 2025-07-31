import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ This is needed for Netlify/static deployment
  server: {
    port: 5173,
    host: true
  }
})
