import React, { useState } from 'react';
import Tile from './Tile'; // Importing the Tile component for rendering individual tiles
import Strike from './Strike'; // Importing the Strike component for rendering strike lines
import GameOver from './GameOver'; // Importing the GameOver component for displaying game outcome
import Reset from './Reset'; // Importing the Reset component for resetting the game
import './TicTacToe.css';

// Initializing the initial state of the game board with 9 null values
const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  // State variables to manage the game state
  const [board, setBoard] = useState(initialBoard); // State variable for the game board
  const [xIsNext, setXIsNext] = useState(true); // State variable to track whose turn it is (X or O)
  const [scoreX, setScoreX] = useState(0); // State variable to track the score of player X
  const [scoreO, setScoreO] = useState(0); // State variable to track the score of player O
  const [winner, setWinner] = useState(null); // State variable to store the winner of the game
  const [strikeClass, setStrikeClass] = useState(null); // State variable to manage strike line styling

  // Array containing the winning combinations of tic-tac-toe
  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Function to calculate the winner of the game
  const calculateWinner = () => {
    // Loop through each winning combination
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i]; // Destructuring the winning combination
      // Check if the cells in the winning combination are all equal and not null
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setStrikeClass(`strike-${i}`); // Set the strike class for styling
        return board[a]; // Return the winner symbol (X or O)
      }
    }
    return null; // If no winner is found, return null
  };

  // Function to handle click events on the game board
  const handleClick = (index) => {
    if (winner || board[index]) return; // If there's already a winner or the cell is already filled, return

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O'; // Set the value of the clicked cell to X or O based on whose turn it is
    setBoard(newBoard); // Update the game board with the new array

    const winner = calculateWinner(); // Check if there's a winner after the current move
    if (winner) {
      setWinner(winner); // Set the winner
      // Update the scores based on the winner
      winner === 'X' ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1);
    }

    setXIsNext(!xIsNext); // Toggle the player turn between X and O
  };

  // Function to handle restart game
  const handleRestart = () => {
    setBoard(initialBoard); // Reset the game board
    setWinner(null); // Reset the winner
    setStrikeClass(null); // Reset the strike class
  };

  // JSX code to render the Tic Tac Toe game board, status, and scores
  return (
    <div className="tic-tac-toe text-center">
      <div className="board">
        {/* Map through each cell in the board array and render a Tile component for each cell */}
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
        {/* Render the Strike component if there's a winning combination */}
        {strikeClass && <div className={`strike ${strikeClass}`} />}
      </div>
      <div className="status">
        {/* Display game outcome (win, draw, or next player's turn) */}
        {winner ? (
          winner === 'draw' ? (
            <p>It's a draw!</p>
          ) : (
            <p>{`${winner} wins!`}</p>
          )
        ) : (
          <p>{`Next player: ${xIsNext ? 'X' : 'O'}`}</p>
        )}
        {/* Button to restart the game */}
        <button onClick={handleRestart}>Restart</button>
      </div>
      {/* Display scores for players X and O */}
      <div className="scores">
        <p>Score X: {scoreX}</p>
        <p>Score O: {scoreO}</p>
      </div>
    </div>
  );
};

export default TicTacToe;
