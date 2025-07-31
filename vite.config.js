import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        destinations: resolve(__dirname, 'src/destinations.html'),
        packages: resolve(__dirname, 'src/packages.html'),
        contact: resolve(__dirname, 'src/contact.html')
      }
    }
  },
  server: {
    open: '/index.html'
  }
});