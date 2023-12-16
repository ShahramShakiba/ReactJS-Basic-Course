import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdiClick = () => {
    setIsEditing(true);
  };

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEdiClick}>Edit</button>
    </li>
  );
}

export default Player;
