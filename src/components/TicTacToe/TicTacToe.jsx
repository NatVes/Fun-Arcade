import React, { useState } from 'react';
import { motion } from 'framer-motion'; // 
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const winningLine = winner ? getWinningLine(board, winner) : null;

  const handleClick = (i) => {
    const newBoard = [...board];
    if (winner || newBoard[i]) return;
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    const isWinningSquare = winningLine && winningLine.includes(i);
    const squareValue = board[i] ? board[i] : '';
    return (
      <motion.button
        className={`square ${isWinningSquare ? 'winning' : ''} ${squareValue}`} 
        onClick={() => handleClick(i)}
        whileHover={{ scale: 1.1 }} // Add motion effect on hover
      >
        {board[i]}
      </motion.button>
    );
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'Draw!';
    } else {
      return `Next Player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="board-container">
      <div className="status">{getStatus()}</div>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset-button" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const getWinningLine = (squares, winner) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === winner && squares[b] === winner && squares[c] === winner) {
      return lines[i];
    }
  }
  return null;
};

export default TicTacToe;
