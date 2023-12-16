const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;

/* EXTRA information

* first map()
-> we have 3 nested arrays that they are the "items" in this outer array
-> therefore, we'll get "row" in the end

-> every list-item <li></li>, needs a key={} that can be identified in a unique way
-> here we don't have a great unique key for these different arrays
-> therefore we use their "index", rowIndex


* second map()
-> to output these inner arrays(null) -> we need another list (ol) because we need a grid
-> <button></button> -> to output the" user symbols (X or O or null)


*/
