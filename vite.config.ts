import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/book-display/",

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        widget: path.resolve(__dirname, 'src/main.tsx'),
        index: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
        chunkFileNames: '[name].js',
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },

})
