// src/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="header mx-sm-auto my-5">
      <img src="src\assets\icons\Logo.png" alt="Game Logo" />
    </motion.header>
  );
};

export default Header;