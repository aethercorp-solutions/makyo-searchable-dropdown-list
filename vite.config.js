// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [react()],
    build: isBuild
      ? {
          lib: {
            entry: path.resolve(__dirname, 'src/index.jsx'),
            name: 'SearchableDropdown',
            fileName: 'index',
            formats: ['es', 'umd'],
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
          outDir: 'dist',
        }
      : undefined,
  };
});
