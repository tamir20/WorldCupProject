import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function MyNavBar() {
  return (
    // <Navbar bg="dark" variant="dark">
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        Your Bets
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default MyNavBar;
