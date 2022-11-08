import React from 'react';

const ReactQueryDevTools = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const shouldRender = ['local-dev', 'development'].includes(
  import.meta.env.MODE
);

export const ReactQueryDevtools = () =>
  shouldRender ? (
    <React.Suspense>
      <ReactQueryDevTools />
    </React.Suspense>
  ) : null;
