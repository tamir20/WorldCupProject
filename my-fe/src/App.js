import React, {useState, useEffect } from 'react';
import Matches from './Matches';
import MyNavBar from './MyNavBar';
import { v4 as uuidv4 } from 'uuid';
import {matchesDB} from './debugDB';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchMatches} from './DBUtil';
import Login from './Login';
import Logout from './Logout';

function App() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetchMatches(setMatches);
  }, []);

  return (
    <>
    <MyNavBar />
    <Login />
    <Logout />
    <Matches matches = { matches } setMatches = {setMatches}/>
    </>
  );

}

export default App;
