import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root in dev, subpath in production (GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/antd-app/' : '/',
})
