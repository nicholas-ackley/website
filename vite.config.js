import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/website", // Base path for deployment
  server: {
    historyApiFallback: true, // Enable fallback for React Router
  },
});
