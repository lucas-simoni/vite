/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), visualizer({ gzipSize: true })],
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
