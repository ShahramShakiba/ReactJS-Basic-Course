import { useState } from 'react';

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdiClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEdiClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;

/* Updating State Based On Previous State Value

*❌❌❌ setIsEditing(!isEditing) => schedule a state-update to true or vice versa but does not immediately change that state ❌❌❌
if your New State Depends on Your Previous State value 
-> you "-> should NOT <-" update the state like this

?-> React is scheduling those state updating functions, so this state update here "is not performed instantly" instead, it's scheduled by React to be performed in the future; the future will probably be in 1 or 2 milliseconds, but it's not "instant"

*✅✅✅ setIsEditing(wasEditing => !wasEditing) ✅✅✅
instead "Pass a Function" to your state updating function
-> this function will automatically be called by React and will receive the Guaranteed Latest State Value.

-> this function will get the current-value as an input

? You simply have a guarantee by React that you'll always be working with the latest available state value.

*/

/* Two-way-binding 
* Two-way-binding
                               back-value-into       get-value-out
? <input type="text" required value={playerName} onChange={handleChange} />
-> we're getting a value out of this input and we're feeding a value back into this input

*/
