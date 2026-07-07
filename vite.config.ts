import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // ✅ FIX: Enable chunk splitting for better caching & faster loads
      rollupOptions: {
        output: {
          manualChunks: {
            // Split heavy animation library into its own chunk
            'framer-motion': ['framer-motion'],
            // Split React core
            'react-vendor': ['react', 'react-dom'],
            // Split UI icons
            'lucide': ['lucide-react'],
          },
        },
      },
      // ✅ FIX: Increase chunk size warning limit slightly (framer-motion is large)
      chunkSizeWarningLimit: 600,
      // ✅ FIX: Enable source maps for production debugging (can disable if not needed)
      sourcemap: false,
      // ✅ FIX: Use esbuild for faster minification
      minify: 'esbuild',
      target: 'es2015',
    },
    optimizeDeps: {
      // ✅ FIX: Pre-bundle these to avoid conversion overhead on first load
      include: ['framer-motion', 'react', 'react-dom', 'lucide-react'],
    },
  };
});
