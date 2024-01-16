import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { GoogleLogin } from '@react-oauth/google';

const App = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default App;
