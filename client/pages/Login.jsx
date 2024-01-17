import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = (props) => {

    const { updateUserInfo } = props;
    
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                let credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                console.log('decoded cred:', credentialResponseDecoded);
                //Check if user exists in db
                const data = {
                    email: credentialResponseDecoded.email
                }
                fetch('/checkUser', {
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
                
                //If not, create db entry

                //set global state
                // updateUserInfo( )
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default Login;