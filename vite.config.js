import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   define: {
    // Forzamos a Vite a reemplazar la variable directamente con un String literal en producción
    'import.meta.env.OLYMPHUS_URL': JSON.stringify('https://olymphus-landing-backend.onrender.com')
  }
})
