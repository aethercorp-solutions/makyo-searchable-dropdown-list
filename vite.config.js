import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default defineConfig(({ command }) => ({
  plugins: [react(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      'searchable-dropdown/dist/index.js': 'searchable-dropdown/dist/index.mjs'
    }
  },
  build: command === 'build' ? {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'SearchableDropdown',
      fileName: (format) => {
        if (format === 'es') return 'index.js';
        if (format === 'umd') return 'index.umd.js';
      },
      formats: ['es', 'umd']
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        },
        {
          format: 'umd',
          entryFileNames: 'index.umd.js',
          name: 'SearchableDropdown',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      ]
    }
  } : undefined
}));
