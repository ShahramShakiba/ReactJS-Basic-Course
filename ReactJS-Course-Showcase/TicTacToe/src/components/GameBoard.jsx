const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
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

/* first map()
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

/* "handleSelectSquare" function
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
*/

/* Driving State from Props
* Driving State from Props

01-> let gameBoard = initialGameBoard; 

  02-> for (const turn of turns) {
    03->  const { square, player } = turn;
    04->  const { row, col } = square;

    05->  gameBoard[row][col] = player;
    }

? 01-> drive our gameBoard :
  -> which still should be such ⬇️ an array ⬇️, array ful of array: 
  [null, null, null],
  [null, null, null],
  [null, null, null],
  -> from this "turns"⬇️ array :
  function GameBoard({ onSelectSquare, turns }) {

? 02-> overwrite this variable(gameBoard) :
  -> with data derived from our "turns" ⬆️, if we have turns
  -> if"turns is an empty array, we leave the "gameBoard" as it is
  -> to achieve this we can add a "for" loop
  -> if "turns" is an empty array, this loop won't execute without us doing anything 

? 03-> extract the information about the turn that occurred :
  -> from that "object" ⬇️ that we're storing in this turns array 
?     { square: { row: rowIndex, col: colIndex }, player: currentPlayer, },

     -> every turn in that turns array will be an object of this shape⬆️ 
     -> therefore, we can destructure our turn to pull these two properties :
        { square, player }
        out of the "turn", we're currently looking at in this iteration
     
? 04-> "square" is a nested object :
  -> where we have a "row" and a "col" property
  -> we can pull this information out of this object as well
  -> with that we then got the "player-symbol" and the "row" and the "col" that was selected by that player

? 05-> gameBoard[row][col] = player;
  -> we can go to our gameBoard and update the "row" and "column" with the "player-symbol"

? THAT'S ALL ...

* we don't need to manage any "state" here, instead, we're "deriving-state"
*-> we are producing some derived state, some computed value
*-> gameBoard is a -> Computed Value that is derived from "gameTurns" state, that is manage in "App Component"


* ✅✅✅ you should manage as little state as needed and try to derive as much information and as many values as possible from that state ✅✅✅ 


?  <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
?     {playerSymbol}
?  </button>

-> to make sure that we get this information about which button in which row and which column was clicked
-> to have full control how handleSelectSquare in the end will be executed
-> we pass "rowIndex, colIndex" as arguments to "onSelectSquare" function
-> therefore in the end, to "handleSelectSquare" function, since that's the value for this "onSelectSquare" prop 
-> with that we're making sure that "rowIndex, colIndex" data arrives ⬇️here⬇️ and is stored ⬇️here⬇️:
?   { square: { row: rowIndex, col: colIndex }, player: currentPlayer, },
*/

/* Disabling Buttons Conditionally
-> disable button once it has been selected

?-> disabled={playerSymbol !== null}

-> set it to true if this button was already selected by a player and set it to false otherwise if it should still be enabled
*/