import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['bootstrap/dist/css/bootstrap.min.css', './node_modules/firebase/auth', './node_modules/firebase/app', './node_modules/firebase/firestore']
    }
  }
})
