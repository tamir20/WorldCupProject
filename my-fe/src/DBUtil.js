export function updateBet(match){
    console.log(match["matchID"]);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matchID: parseInt((match["matchID"]),10), countryABet: parseInt((match["countryABet"]),10), countryBet: parseInt((match["countryBet"]),10)})
    };
    fetch('http://127.0.0.1:5000/updateBet', requestOptions);
        // .then(response => response.json())
        // .then(data => this.setState({ postId: data.id }));
}
