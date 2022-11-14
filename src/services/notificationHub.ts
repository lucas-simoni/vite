import { toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuth } from 'app';
import axios from 'axios';

const nhClient = axios.create({
  baseURL: 'http://localhost:8000/v1/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

nhClient.interceptors.request.use(
  async function (config) {
    const token = oktaAuth.getAccessToken();

    if (token) {
      config.headers && (config.headers.Authorization = `Bearer ${token}`);
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

nhClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // The call to isAuthenticated() tries to automatically renew the token
      const isAuthenticated = await oktaAuth.isAuthenticated();

      if (!isAuthenticated) {
        const originalUri = toRelativeUrl(
          window.location.href,
          window.location.origin
        );
        oktaAuth.setOriginalUri(originalUri);
        await oktaAuth.signInWithRedirect();
      }
    }
    return Promise.reject(error);
  }
);

const getNotifications = () => nhClient.get('notification');

export const nhAPI = {
  getNotifications,
};
