// GameContainer.jsx
import React from 'react';
import './GameContainer.css'; // Import the styles for GameContainer

const GameContainer = ({ image, alt, title, description, link }) => {
  return (
    <div className="game-container">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Play Now</a>
    </div>
  );
};

export default GameContainer;
