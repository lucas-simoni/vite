/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression({ algorithm: 'gzip' }),
    visualizer({ gzipSize: true }),
  ],
  envDir: './config',
  define: {
    __APP_NAME__: JSON.stringify(process.env.npm_package_name),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'c8',
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
      all: true,
      include: ['src/**/*.{ts,tsx}', '!src/index.tsx', '!src/app/index.tsx'],
    },
  },
});
