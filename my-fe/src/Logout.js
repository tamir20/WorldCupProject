import React from 'react';
import { GoogleLogout } from '@leecheuk/react-google-login';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Logout({matches, setMatches}) {
  const onSuccess = () => {
    // console.log('Logout Success');
    alert('Logout made successfully ✌');
    // setFruits((current) =>
    // current.filter((fruit) => fruit.id !== 2)
    // );
    const newMatches= {...matches}
    delete newMatches["Login"]
    delete newMatches["DB"]
    setMatches(newMatches)
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;