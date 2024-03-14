// Body.jsx
import React from 'react';
import GameContainer from './GameContainer'; // Import the GameContainer component
import './Body.css'; // Import the styles for Body

const Body = () => {
  return (
    <section className="game-containers">
      <GameContainer
        image="./images/tic-tac-toe-game.png"
        alt="Tic Tac Toe Game"
        title="TIC-TAC-TOE"
        description="Tic Tac Toe - the classic game of strategy and quick thinking. Can you outsmart your opponent and get three in a row?"
        link="#"
      />
      <GameContainer
        image="./images/memory_card.png"
        alt="Memory Game"
        title="MEMORY GAME"
        description="Test your memory and have fun! Flip the cards and find the matching pairs in this classic concentration game."
        link="#"
      />
      <GameContainer
        image="./images/memory_card.png"
        alt="Hangman Game"
        title="HANGMAN"
        description="Hangman: The classic word-guessing game. Can you save the stick figure?"
        link="#"
      />
    </section>
  );
};

export default Body;
