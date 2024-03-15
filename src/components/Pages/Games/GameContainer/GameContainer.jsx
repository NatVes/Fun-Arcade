// GameContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './GameContainer.css'; // Import the styles for GameContainer

const GameContainer = ({ id, title, image, description }) => {
  return (
    <div className="game-container card p-0">
            {/* <div className="img-container"> */}
                <img className="card-img-top" src={image} alt={title}/>
            {/* </div> */}
            <div className="card-body">
                <h3 className="card-title">{ title }</h3> 
                <p>{description}</p>
                <Link to={`/games/${title}`}>
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
