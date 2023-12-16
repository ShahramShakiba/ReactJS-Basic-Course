import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //=> update the GameBoard based on the Previous state
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

      return updatedBoard;
    });

    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
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

------------------------------------------------------------

* in "handleSelectSquare" function
? rowIndex -> on which row index we have; which inner array contains the field that should be updated

? colIndex -> which exact field was clicked; which null should be replaced with an "X" or an "O"

❌❌❌ NOT RECOMMENDED ❌❌❌
?-> prevGameBoard[rowIndex][colIndex] = "X"; 
[rowIndex]-> select on of 3 arrays
[colIndex]-> select on of the elements inside of that inner arrays

❌ -> if your state is an "Object" or "Array" you're dealing with a ->"ReferencE-Value"<- in JavaScript; 
-> therefore if you would be updating like this you would be updating the "old value in-memory" immediately, even before  this scheduled state update was executed by React
=>> this can lead to bugs and side effects

✅✅✅ RECOMMENDED ✅✅✅
const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

-> map()-> since we're dealing with some nested arrays those should be copied as well before update anything, we can achieve this by calling map

-> innerArray-> then we got inner-arrays inside of nested array, therefore we spreads the elements of that inner-array


? -> which symbol should be placed

*/
