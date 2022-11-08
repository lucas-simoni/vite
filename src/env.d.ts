/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Sentry
  readonly VITE_SENTRY_DSN: string;
  // Okta
  readonly VITE_OKTA_ISSUER: string;
  readonly VITE_OKTA_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Globals defined in './vite.config.ts'
declare const __APP_NAME__: string;
declare const __APP_VERSION__: string;
