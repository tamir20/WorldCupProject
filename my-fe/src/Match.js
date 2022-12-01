
import * as React from 'react';
import MatchDisplay from "./MatchDisplay";
import MatchEdit from "./MatchEdit";

function Match({match}) {
    if(match.editMode){
        return (
            <>
                <MatchEdit match={match} />
            </>
        )
    }else{
        return (
            <>
                <MatchDisplay match={match} />
            </>
        )
    }
  }
  
  export default Match;