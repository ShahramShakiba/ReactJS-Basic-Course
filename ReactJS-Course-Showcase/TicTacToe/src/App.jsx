import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
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

        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
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

* How to know "active-player" in both Player & GameBoard component?
* Lifting State Up
-> lift the state up to the closest ancestor components that has access to all components that need to work with that state

* Manage "active-player" here

?-> GameBoard-Component: 
we need the symbol of the active player
?-> Player-Component:
we want to add a "CSS class" dynamically


*/
