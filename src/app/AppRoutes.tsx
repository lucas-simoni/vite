import { Route, Routes } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth } from 'components/SecureRoute';
import { Secret } from 'components/Secret';
import { lazy, Suspense } from 'react';
import { Layout } from 'components/Layout';

// Lazy loaded pages
const Home = lazy(() => import('pages/Home'));

export const AppRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<RequiredAuth />}>
            <Route index element={<Secret />} />
          </Route>
          <Route path="/login/callback" element={<LoginCallback />} />
          <Route path="*" element={<h1>404 - Not found</h1>} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
