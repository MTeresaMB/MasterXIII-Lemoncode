console.log("************** PLAYERSORDER *********************");

const getPlayersOrder = (players, turns) => {
  let currentPlayer;
  let nextPlayer;

  for(let i = 0; i < turns; i++){
    [currentPlayer, ...nextPlayer] = players;
    players = [...nextPlayer, currentPlayer];
  }
  return players
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]