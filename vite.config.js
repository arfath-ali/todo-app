import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), visualizer()],
  server: {
    historyApiFallback: true,
  },
});
