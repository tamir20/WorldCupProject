import React, {useState, useEffect } from 'react';
import Matches from './Matches';
import MyNavBar from './MyNavBar';
import { v4 as uuidv4 } from 'uuid';
import {matchesDB} from './debugDB';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [matches, setMatches] = useState([])

  const fetchMatches = () => {
    // // get my matches from my debugDB
    // setMatches(matchesDB);
    
    // fetch information from my be server
    fetch('http://localhost:5000')
      .then((response) => response.json())
      .then((jsonGroups) => {
        // console.log(jsonGroups);
        setMatches(jsonGroups);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <>
    <MyNavBar />
    <Matches matches = { matches } />
    </>
  );

}

export default App;
