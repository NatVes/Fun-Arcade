// Tile.jsx

import React from 'react';

const Tile = ({ value, onClick }) => (
  <div className="cell" onClick={onClick}>
    {value}
  </div>
);

export default Tile;