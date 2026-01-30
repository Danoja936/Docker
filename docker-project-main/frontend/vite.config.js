import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // Listen on all network interfaces
    watch: {
      usePolling: true,  // Ensures Docker detects file changes (CSS/JS)
    },
  },
});
