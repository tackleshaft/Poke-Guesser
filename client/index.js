import React from 'react';
import { createRoot, ReactDom } from 'react-dom/client';
import App from './App.jsx';
import {
  GoogleOAuthProvider,
  GoogleLogin,
  GoogleLogout,
  useGoogleAuth,
} from '@react-oauth/google';

const root = createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.clientId}>
    <App />
  </GoogleOAuthProvider>
);
