import React from 'react';
import {fetchMatches} from './DBUtil';
import style from "./style.module.css";

function Refresh({matches, setMatches}) {

  function refreshMatches() {
    fetchMatches(matches.Login, setMatches)
  }

  return (
    <button className={style.button3} onClick={refreshMatches}>⟲</button>
  );
}

export default Refresh;