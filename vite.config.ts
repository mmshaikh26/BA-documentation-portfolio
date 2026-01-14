import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'BA-documentation-portfolio' with your repo name if different
export default defineConfig({
  base: '/BA-documentation-portfolio/',
  plugins: [react()]
})