import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Logout from './Logout';



function MyNavBar({matches, setMatches}) {
  // console.log(matches);
  return (
    // <Navbar bg="dark" variant="dark">
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        Your Bets
      </Navbar.Brand>
      
    </Container>
    <div className="p-2"><Login matches = { matches } setMatches = {setMatches}/></div>
    <div className="p-2"><Logout matches = { matches } setMatches = {setMatches}/></div>
  </Navbar>
  )
  return(<></>)
}

export default MyNavBar;
