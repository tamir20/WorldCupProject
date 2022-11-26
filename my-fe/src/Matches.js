import React, {useState, useEffect } from 'react';
import Match from './Match'

function Matches({matches}) {
  return (
    <React.Fragment>
    {/* <ListGroup> */}
      {matches.map(match => {
          return <Match key={match.matchID} match={match} />
      })}
    {/* </ListGroup> */}
    </React.Fragment>
  )
}

export default Matches;
