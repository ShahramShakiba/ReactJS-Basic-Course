import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdiClick = () => {
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required value={name} />;

    // btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}

        <span className="player-symbol">{symbol}</span>
      </span>

      {/* <button onClick={handleEdiClick}>{btnCaption}</button> */}
      <button onClick={handleEdiClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;

/* EXTRA information

---> If Your Updating State Based On Previous State Value <---

*❌ setIsEditing(!isEditing) => schedule a state-update to true, but does not immediately change that state ❌
if your New State Depends on Your Previous State value 
-> you "-> should NOT <-" update the state like this

?-> React is scheduling those state updating functions, so this state update here "is not performed instantly" instead, it's scheduled by React to be performed in the future; the future will probably be in 1 or 2 milliseconds, but it's not "instant"

*✅ setIsEditing(wasEditing => !wadEditing) ✅
instead "Pass a Function" to your state updating function
-> this function will automatically be called by React and will receive the Guaranteed Latest State Value.

-> this function will get the current-value as an input

? You simply have a guarantee by React that you'll always be working with the latest available state value.

*/
