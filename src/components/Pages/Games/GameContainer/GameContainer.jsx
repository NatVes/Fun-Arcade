// GameContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './GameContainer.css'; // Import the styles for GameContainer
import { motion } from 'framer-motion';

const GameContainer = ({ title, image, description, i }) => {
  return (
    <motion.div 
    initial= {{ opacity: 0, y: "-100vh", }}
    animate={{ 
      opacity: 1, 
      y: 0, 
      transition: {type: "spring", stiffness: 80, duration: 0.3, delay: i * 0.3+0.5} 
    }}
    whileHover={{ scale: 1.1, }}
    className="game-container card col-9 col-sm-8 col-md-5 col-lg-3 p-0">
        <img className="card-img-top" src={image} alt={title}/>
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">{ title }</h3> 
          <p>{description}</p>
          <Link to={`/games/${title}`} className='mt-auto'>
              <motion.button 
              whileHover={{ 
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
              transition={{ duration: 0.05 }}
              className="btn">
                Play Now
              </motion.button>
          </Link>
        </div>
    </motion.div>
  );
};

export default GameContainer;
