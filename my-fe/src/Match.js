
import * as React from 'react';
import MatchDisplay from "./MatchDisplay";
import MatchEdit from "./MatchEdit";

function Match({match, setMatches, matches}) {
    if(match.editMode){
        return (
            <>
                <MatchEdit match={match} setMatches={setMatches} matches={matches}/>
            </>
        )
    }else{
        return (
            <>
                <MatchDisplay match={match} setMatches={setMatches} matches={matches}/>
            </>
        )
    }
  }
  
  export default Match;