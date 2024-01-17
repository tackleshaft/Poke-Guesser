import { GoogleLogin } from '@react-oauth/google';


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