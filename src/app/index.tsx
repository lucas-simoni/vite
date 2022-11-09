import { useNavigate } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';
import { AppRoutes } from './AppRoutes';
import { oktaConfig } from './config';

const oktaAuth = new OktaAuth(oktaConfig);

export default function App() {
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth: unknown, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <AppRoutes />
    </Security>
  );
}
