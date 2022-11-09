import type { BrowserOptions } from '@sentry/browser';
import type { RumInitConfiguration } from '@datadog/browser-rum';
import type { OktaAuthOptions } from '@okta/okta-auth-js';
import { BrowserTracing } from '@sentry/tracing';

export const sentryConfig: BrowserOptions = {
  dsn: import.meta.env.VITE_SENTRY_DSN,
  release: `${__APP_NAME__}@${__APP_VERSION__}`,
  environment: import.meta.env.MODE,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0,
};

export const datadogConfig: RumInitConfiguration = {
  applicationId: import.meta.env.VITE_DD_APPLICATION_ID,
  clientToken: import.meta.env.VITE_DD_CLIENT_TOKEN,
  site: import.meta.env.VITE_DD_SITE ?? 'datadoghq.com',

  service: __APP_NAME__,
  env: import.meta.env.MODE,
  version: __APP_VERSION__,

  trackInteractions: true,
  trackFrustrations: true,
  trackResources: true,
  trackLongTasks: true,

  // Defaults
  sampleRate: 100,
  sessionReplaySampleRate: 100,
  tracingSampleRate: 100,
};

export const oktaConfig: OktaAuthOptions = {
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  issuer: import.meta.env.VITE_OKTA_ISSUER,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  devMode: import.meta.env.MODE === 'local-dev',
};
