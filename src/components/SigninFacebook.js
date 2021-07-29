import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from "@material-ui/core"
import { GoogleLogin } from 'react-google-login'


const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <GoogleLogin
    // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    clientId="49062751084-trdnhdhcp8mpkcfjh7deqv5fn003khkt.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);