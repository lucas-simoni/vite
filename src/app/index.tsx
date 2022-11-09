import { Layout } from 'components/Layout';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy loaded pages
const Home = lazy(() => import('pages/Home'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404 - Route not found</h1>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
