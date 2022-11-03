/// <reference types="vitest" />
/// <reference types="vite/client" />

import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  envDir: './config',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'c8',
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
      all: true,
      include: ['src/**/*.{ts,tsx}', '!src/index.tsx', '!src/app/index.tsx'],
    },
  },
});
