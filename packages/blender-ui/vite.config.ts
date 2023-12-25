import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    vue(),

    // css in js
    cssInjectedByJsPlugin(),
  ],

  build: {
    minify: true,

    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'index.ts'),
      name: 'BlenderUI',
      // the proper extensions will be added
      fileName: 'blender-ui',
    },

    rollupOptions: {
      // // make sure to externalize deps that shouldn't be bundled
      // // into your library
      // external: ['vue'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    },
  },
})
