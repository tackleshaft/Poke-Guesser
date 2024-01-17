import React from 'react';
import { createRoot, ReactDom } from 'react-dom/client';
import App from './App.jsx';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const root = createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='245321018537-i6aio1jkoma48l62jeoab697e84ecl55.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
);
