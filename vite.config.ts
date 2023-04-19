import { resolve } from 'node:path'

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [dts(), react(), splitVendorChunkPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'main.tsx'),
      name: 'NextReactP5Wrapper',
    },
   rollupOptions: {
      external: ['react', 'react-dom', 'react-p5-wrapper', 'next'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react-p5-wrapper': 'ReactP5Wrapper',
          'next': 'Next'
        },
      },
    },
  }
})
