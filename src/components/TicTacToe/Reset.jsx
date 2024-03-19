// Reset.jsx
import React from 'react';

const Reset = ({ onReset }) => {
  return (
    <div className="reset-button">
      <button onClick={onReset}>Restart</button>
    </div>
  );
};

export default Reset;
