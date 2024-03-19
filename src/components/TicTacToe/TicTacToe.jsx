// TicTacToe.js
import React, { useState } from 'react';
import './TicTacToe.css';

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [winner, setWinner] = useState(null);

  const calculateWinner = () => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);

    const winner = calculateWinner();
    if (winner) {
      setWinner(winner);
      if (winner === 'X') {
        setScoreX(scoreX + 1);
      } else {
        setScoreO(scoreO + 1);
      }
    } else if (!newBoard.includes(null)) {
      setWinner('draw');
    }

    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe text-center">
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? (
          winner === 'draw' ? (
            <p>It's a draw!</p>
          ) : (
            <p>{`${winner} wins!`}</p>
          )
        ) : (
          <p>{`Next player: ${xIsNext ? 'X' : 'O'}`}</p>
        )}
        <button onClick={handleRestart}>Restart</button>
      </div>
      <div className="scores">
        <p>Score X: {scoreX}</p>
        <p>Score O: {scoreO}</p>
      </div>
    </div>
  );
};

export default TicTacToe;