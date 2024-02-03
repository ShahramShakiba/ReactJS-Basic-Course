import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import WINNING_COMBINATIONS from './winning-combination';
import GameOver from './components/GameOver';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

const deriveWinner = (gameBoard, players) => {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
};

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  //-> executed whenever we wanna switch-turns in "GameBoard"
  const handleSelectSquare = (rowIndex, colIndex) => {
    //update based on the Previous state
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

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

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

/* Reusing a Component - isolated instance:
* Reusing a Component
whenever you are using or reusing a component, React will basically create a new isolated instance, for instance:

-> <Player name="Player 1" symbol="X" />
-> <Player name="Player 2" symbol="O" />
These two component work totally isolated from each other

? important feature in React
Having this isolation allows you to build super complex reusable components
*/

/* active-player:
* How to Manage "active-player" in both Player & GameBoard component
* Lifting State Up
-> lift the state up to the closest ancestor components that has access to all components that need to work with that state

?-> GameBoard-Component: 
we need the symbol of the active player
?-> Player-Component:
we want to add a "CSS class" dynamically
*/

/* Manage Game-State
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

/* Reducing State Management
* Identifying Unnecessary State

-> we already have this "gameTurns-state" which changes whenever a box is selected
-> so we don't need this activePlayer-state just to trigger a UI when that happens ⬇️
?-> const [activePlayer, setActivePlayer] = useState('X);
?-> function App() { 
?->   setActivePlayer((curActivePlayer) => (
?->      curActivePlayer === 'X' ? 'O' : 'X'));

?->      {the rest of the code....}
?->   }

-> BUT, we need the information regarding which players is the "active-player"
-> we can get this info from our gameTurns-state

-> now, we can use a helper function which won't need any access to the state or any other data related to the component and also, shouldn't be recreated when the component function re-executes ⬇️

?-> function deriveActivePlayer(gameTurns) {
?->   let currentPlayer = 'X';
?->   if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
?->     currentPlayer = 'O';
?->    }

?->   return currentPlayer;
?->  }

-> use the current-gameTurns-state

-> back to our "App-Component", create a variable which holds the result of calling "derivedActivePlayer" ⬇️
?-> const activePlayer = deriveActivePlayer(gameTurns);

-> pass our state "gameTurns" as an argument to "deriveActivePlayer" so in there it is available

-> THEN in state-updating-function "setGameTurns" -> set our currenPlayer by calling "deriveActivePlayer" ⬇️
?-> const currentPlayer = deriveActivePlayer(prevTurns);

-> with passing "prevTurns" as an argument

* Manage as little state as possible and derive and compute as many values as needed

*/
