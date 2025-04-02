import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/api": path.resolve(__dirname, "./src/shared/api"),
      "@/context": path.resolve(__dirname, "./src/shared/context"),
      "@/components": path.resolve(__dirname, "./src/shared/components"),
      "@/hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@/tests": path.resolve(__dirname, "./src/tests"),
      "@/types": path.resolve(__dirname, "./src/shared/types"),
      "@/utils": path.resolve(__dirname, "./src/shared/utils"),
    },
  },
  test: {
    coverage: {
      provider: 'v8',
    },
    setupFiles: './src/tests/setup.ts',
    globals: true,
    environment: 'jsdom',
  },
});
