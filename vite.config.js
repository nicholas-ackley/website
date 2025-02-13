import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/website/' : '/', // Use '/website/' only in production
  server: {
    historyApiFallback: true, // Enable fallback for React Router in dev
  },
});
