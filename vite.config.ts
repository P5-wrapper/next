import { resolve } from 'node:path'

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'main.tsx'),
      name: 'NextReactP5Wrapper',
    },
  }
})
