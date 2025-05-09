import './tictactoe.css';
import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        setWinner(`Player ${newBoard[a]} wins!`);
        setWinningCombo(pattern);
        return true;
      }
    }
    if (!newBoard.includes("")) {
      setWinner("It's a Draw!");
      return true;
    }
    return false;
  };

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    if (!checkWinner(newBoard)) {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setWinningCombo([]);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="status">
        {winner ? winner : `Player ${turn}'s turn`}
      </div>
      <div className="board">
        {board.map((val, idx) => (
          <button
            key={idx}
            className={`cell ${winningCombo.includes(idx) ? "win" : ""}`}
            onClick={() => handleClick(idx)}
          >
            {val}
          </button>
        ))}
      </div>
      {winner && (
        <button className="restart" onClick={restartGame}>Restart</button>
      )}
    </div>
  );
};

export default TicTacToe;
