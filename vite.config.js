import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory for the built files
    assetsDir: 'assets', // Directory for static assets
    minify: true, // Minify the built files
    sourcemap: false, // Generate sourcemaps for the built files
    terserOptions: {
      compress: {
        drop_console: true, // Remove console statements
      },
    },
  },
});
