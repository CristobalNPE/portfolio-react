import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   origin: 'http://localhost:3000/frontend/',
  //   host: '0.0.0.0',
  //   fs: {
  //     strict: true,
  //   }
  // },
  plugins: [react()]
})
