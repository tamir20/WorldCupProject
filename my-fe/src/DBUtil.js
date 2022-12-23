import {matchesDB} from './debugDB';

export function updateBet(match, matches, setMatches){
    console.log(match["matchID"]);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "token": matches.Login ,matchID: parseInt((match["matchID"]),10), countryABet: parseInt((match["countryABet"]),10), countryBet: parseInt((match["countryBet"]),10)})
    };
    fetch('http://127.0.0.1:5000/updateBet', requestOptions);
        // .then(response => response.json())
        // .then(data => this.setState({ postId: data.id }));

    // and for last i want to refetch my games to update the score count
    fetchMatches(matches.Login, setMatches)
}

export function fetchMatches(login, setMatches){
    // console.log(login);

    // get my matches from my debugDB
    // setMatches({DB: matchesDB});

    // fetch information from my be server
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "token": login})
    };
    fetch('http://localhost:5000', requestOptions)
      .then((response) => response.json())
      .then((jsonGroups) => {
        // console.log(jsonGroups);
        setMatches({Login: login, DB: jsonGroups});
      })
      .catch((err) => {
        console.log(err.message);
      });
}
