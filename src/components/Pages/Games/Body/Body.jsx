// Body.jsx
import React from 'react';
import GameContainer from '../GameContainer/GameContainer'; // Import the GameContainer component
import './Body.css'; // Import the styles for Body
import gamesData from "../../../../games.json";

const Body = () => {
  return (
    <section className="game-containers">
      {gamesData.map((game) => (
        <GameContainer
          id = {game.id}
          key = {game.id}
          title = {game.title}
          image = {game.image}
          description = {game.description}
        />
      ))
      }
    </section>
  );
};

export default Body;
