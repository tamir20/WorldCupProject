import React, {useState, useEffect } from 'react';
import Matches from './Matches';
import MyNavBar from './MyNavBar';
// import { v4 as uuidv4 } from 'uuid';
// import {matchesDB} from './debugDB';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchMatches} from './DBUtil';

function App() {
  const [matches, setMatches] = useState([])

  // useEffect(() => {
  //   fetchMatches(matches, setMatches);
  // }, []);

  if (matches.DB){
    // console.log(matches);
    return (
      <>
      <MyNavBar matches = { matches } setMatches = {setMatches}/>
      <Matches matches = { matches } setMatches = {setMatches}/>
      </>
    );
  }else{
    return (
      <>
      <MyNavBar matches = { matches } setMatches = {setMatches}/>
      </>
    );
  }

  // if (matches.DB){
  //   // console.log(matches);
  //   return (
  //     <>
  //     <MyNavBar matches = { matches } setMatches = {setMatches}/>
  //     <Matches matches = { matches } setMatches = {setMatches}/>
  //     </>
  //   );
  // }else{
  //   return(<MyNavBar/>);
  // }

}

export default App;
