import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // IMPORTANT: set this to "/BA-documentation-portfolio/" to match your repo name on GitHub Pages
  base: '/BA-documentation-portfolio/',
  plugins: [react()],
})
