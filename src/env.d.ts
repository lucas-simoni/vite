/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Globals defined in './vite.config.ts'
declare const __APP_NAME__: string;
declare const __APP_VERSION__: string;
