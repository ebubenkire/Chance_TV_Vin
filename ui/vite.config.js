import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Chance_TV_Vin/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
