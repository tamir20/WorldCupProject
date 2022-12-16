import React, {useState, useEffect } from 'react';
import Match from './Match'

function Matches({matches, setMatches}) {
  return (
    <React.Fragment>
    {/* <ListGroup> */}
      {matches.DB.map(match => {
          return <Match key={match.matchID} match={match} setMatches={setMatches} matches={matches}/>
      })}
    {/* </ListGroup> */}
    </React.Fragment>
  )
}

export default Matches;
