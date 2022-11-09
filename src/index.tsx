import App from './app';
import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { init as SentryInit } from '@sentry/react';
import { datadogRum } from '@datadog/browser-rum';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from 'utils/ReactQueryDevtools';
import { datadogConfig, sentryConfig } from 'app/config';

if (sentryConfig.dsn) {
  SentryInit(sentryConfig);
}

if (datadogConfig.applicationId && datadogConfig.clientToken) {
  datadogRum.init(datadogConfig);
  datadogRum.startSessionReplayRecording();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
