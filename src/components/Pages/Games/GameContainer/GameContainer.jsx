// GameContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './GameContainer.css'; // Import the styles for GameContainer

const GameContainer = ({ title, image, description }) => {
  return (
    <div className="game-container card col-9 col-sm-8 col-md-5 col-lg-3 p-0">
        <img className="card-img-top" src={image} alt={title}/>
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{ title }</h3> 
          <p>{description}</p>
          <Link to={`/games/${title}`} className='mt-auto'>
              <button className="btn">
                Play Now
              </button>
          </Link>
        </div>
    </div>
    
    // <div className="game-container">
    //   <img src={image} alt={alt} />
    //   <h3>{title}</h3>
    //   <p>{description}</p>
    //   <a href={link}>Play Now</a>
    // </div>
  );
};

export default GameContainer;
