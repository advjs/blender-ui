import path from 'node:path'
import { defineConfig } from 'vite'

// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],

  resolve: {
    alias: {
      // '@advjs/blender-ui/': `${path.resolve(__dirname, '../../packages/blender-ui')}/`,
      // '@advjs/blender-ui': path.resolve(__dirname, '../../packages/blender-ui/index.ts'),
      '@advjs/blender-ui/': `${path.resolve(__dirname, '../../packages/blender-ui')}/`,
      '@advjs/blender-ui': path.resolve(__dirname, '../../packages/blender-ui/dist/blender-ui.js'),
    },
  },
})
