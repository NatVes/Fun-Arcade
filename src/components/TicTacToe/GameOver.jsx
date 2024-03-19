import React from 'react';

const GameOver = ({ gameState }) => {
  let message;

  switch (gameState) {
    case 'X':
      message = 'X wins!';
      break;
    case 'O':
      message = 'O wins!';
      break;
    case 'draw':
      message = "It's a draw!";
      break;
    default:
      message = '';
  }

  return (
    <div className="game-over">
      <p>{message}</p>
    </div>
  );
};

export default GameOver;
