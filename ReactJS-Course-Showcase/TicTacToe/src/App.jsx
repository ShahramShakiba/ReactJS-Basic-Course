import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  //-> executed whenever we wanna switch-turns in "GameBoard"
  const handleSelectSquare = (rowIndex, colIndex) => {
    //update based on the Previous state
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));

    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
        // console.log(prevTurns[0].player);
      }

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log />
    </main>
  );
}

export default App;

/* EXTRA Information

? Reusing Component:
whenever you are using or reusing a component, React will basically create a new isolated instance, for instance:

-> <Player name="Player 1" symbol="X" />
-> <Player name="Player 2" symbol="O" />
These two component work totally isolated from each other

* important feature in React
Having this isolation allows you to build super complex reusable components

----------------------------------------------------------------------

* How to Manage "active-player" in both Player & GameBoard component
* Lifting State Up
-> lift the state up to the closest ancestor components that has access to all components that need to work with that state

?-> GameBoard-Component: 
we need the symbol of the active player
?-> Player-Component:
we want to add a "CSS class" dynamically

----------------------------------------------------------------------

* Manage Game-State

setGameTurns((prevTurns) => {
02->  let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

01-> const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
    02->  player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });

01-> update turns: the new turns array will depend on the old turns array
  -> we should update this ina an immutable way
  -> the first item should always be the latest turn
  -> store an Object here, so that our "gameTurns" state will eventually be an array full of objects

?-> finally, we want to know "which player" clicked on "which square"
02-> if we use "activePlayer"-state we're technically merging two different states and it's "not optimal"

  -> better way: of deriving the "symbol of the currently activePlayer" is to add a new variable here in this function that we're passing to the state updating function

* if (prevTurns.length > 0 && prevTurns[0].player === 'X') {}
?-> prevTurns[0] : 
    in our previous-turns array if the first element in there, which will always be the latest turn 

?-> prevTurns[0].player === 'X' : 
    if that turn was performed by the player with the "symbol X" and if that's the case we set the currenPlayer to "O"

?-> prevTurns.length > 0 :
    there might be no latest turn stored - initially it's an empty array ->
    const [gameTurns, setGameTurns] = useState([]);

?-> return updatedTurns; :
    return as a new value for the "gameTurns-state"


* It is a state update function that makes sure that we update-state in an "immutable-way" and that we're not "merging different states"
*/
