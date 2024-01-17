import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = (props) => {
    const { updateUserInfo } = props;
    
    const fetchData = (data) => {
        fetch('/api/checkuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({email: data})
        })
            .then(res => res.json())
            .then(data => {
                console.log('this is the fetched state data', data);
                updateUserInfo(data);
                return;
            })
            .catch(err => console.log(err))
        return;
    }

    return (
        <GoogleLogin
            onSuccess={async (credentialResponse) => {
                let credentialResponseDecoded = await jwtDecode(credentialResponse.credential);
                console.log('decoded cred:', credentialResponseDecoded);
                //Check if user exists in db
                console.log(credentialResponseDecoded.email)
                fetchData(credentialResponseDecoded.email);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default Login;