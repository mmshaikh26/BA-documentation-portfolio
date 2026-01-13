import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // IMPORTANT: set this to "/BA-documentation-portfolio/" (or match your repo name)
  base: '/BA-documentation-portfolio/',
  plugins: [react()],
})
