function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player {turn.player} selected: row({turn.square.row})-column(
          {turn.square.col})
        </li>
      ))}
    </ol>
  );
}

export default Log;

/* Extra information

?-> function Log({ turns }) {...} - "turns" prop
-> get those gameTurns from inside the App-Component

?-> turns.map((turn) => (...))
-> map this turns-prop to a "list" of list-items in this ordered-list

?-> {turn.player} selected {turn.square.row}, {turn.square.col}
-> which {player} selected which {field} with the coordinates of that field, so the "row" and "column" index

?-> The " , " between {turn.square.row}, {turn.square.col}
-> it's just a comma, which is no a special JavaScript character

?-> key={`${turn.square.row}${turn.square.col}`}
-> we should add a "key" when outputting a dynamic list and the "key" here could be the combination of "row" and "column" because that will be unique for every turn because a given row-column combination can only be selected once

?-> ` ${}${} `
-> template literal: you can easily inject values into that string

*/
