import React from 'react';

import { GoogleLogin } from '@leecheuk/react-google-login';
// refresh token
import Login from './Login';
import Logout from './Logout';


function ConditionLogin({matches, setMatches}) {
  if(matches.Login){
    return (<>
    <Logout matches = { matches } setMatches = {setMatches} />
    </>);
  }
  else{
    return (
      <div>
        <Login matches = { matches } setMatches = {setMatches} />
      </div>
    );
  }
}

export default ConditionLogin;