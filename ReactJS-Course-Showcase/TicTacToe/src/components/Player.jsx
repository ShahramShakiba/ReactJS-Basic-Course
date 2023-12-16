import { useState } from 'react';

function Player({ name, symbol }) {
  useState();

  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>

        <span className="player-symbol">{symbol}</span>
      </span>

      <button>Edit</button>
    </li>
  );
}

export default Player;
