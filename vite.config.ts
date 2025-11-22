import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { BASE_PATH } from './src/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: BASE_PATH,
})
