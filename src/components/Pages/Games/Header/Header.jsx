// src/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling
import gameLogo from '../../../../assets/icons/Logo.png'
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <motion.header 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="header mx-auto my-5">
      <img src={gameLogo} alt="Game Logo" />
    </motion.header>
  );
};

export default Header;
