// Body.jsx
import React from 'react';
import GameContainer from '../GameContainer/GameContainer'; // Import the GameContainer component
import './Body.css'; // Import the styles for Body
import gamesData from "../../../../games.json";

const Body = () => {
  return (
    <section className="row justify-content-center gap-4 my-5 mx-0">
      {gamesData.map((game, i) => (
        <GameContainer
          i={i}
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
