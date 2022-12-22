import React from 'react';

import { GoogleLogin } from '@leecheuk/react-google-login';
// refresh token
import { refreshTokenSetup } from './utils/refreshToken';

const clientId =
  '226422324312-d72hqrdtmo7t0g5cocolr7uuhl20upj5.apps.googleusercontent.com';

function Login({matches, setMatches}) {
  // console.log("login load: " + matches);
  // console.log(matches);
  const onSuccess = (res) => {
    console.log('Login Success');
    console.log('googleId:', res.googleId);
    console.log('tokenId:', res.tokenId);
    console.log('accessToken:', res.accessToken);
    console.log('tokenObj:', res.tokenObj);
    console.log('profileObj:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍`
    );
    refreshTokenSetup(res);
    // console.log("login message: " + matches);
    // console.log(matches);
    setMatches({
      ...matches,
      Login: res.profileObj.name
    });
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      ` Login failed 😢`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;