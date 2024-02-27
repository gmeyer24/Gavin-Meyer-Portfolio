import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/HW20-Gavin-Meyer-React-Portfolio/",
  plugins: [react()],
  server: {
    port:3000,
    open: true
  }
})
