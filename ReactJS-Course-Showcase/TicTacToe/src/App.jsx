import './App.css';
import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
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

*/
