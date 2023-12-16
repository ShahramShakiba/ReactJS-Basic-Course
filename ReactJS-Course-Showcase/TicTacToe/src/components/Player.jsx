import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdiClick = () => {
    setIsEditing(!isEditing);
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
