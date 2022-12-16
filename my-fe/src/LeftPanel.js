import React from 'react';
import style from "./style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function handleClick(setMatches, matches, matchID){
  let newMatches = matches.DB.map(item => 
      {
        if (item.matchID === matchID){
          return {...item, editMode: !item.editMode}; //gets everything that was already in item, and updates "done"
        }
        return item; // else return unmodified item 
      });
  
  let result = {...matches, DB: newMatches};
  setMatches(result);
}

function LeftPanel({match, setMatches, matches}) {
  return (
    <div className={style.LeftPanel}>
        {/* <button className={style.button42}>X</button> */}
        <button className={style.button42} onClick={() => {handleClick(setMatches, matches, match.matchID) }}>✎</button>
    </div>
  )
}

export default LeftPanel;
