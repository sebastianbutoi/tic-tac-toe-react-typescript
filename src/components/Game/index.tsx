import { useState } from "react";
import { calculateWinner } from "../../helper";
import Board from "../Board";
import "./style.css";

const Game = (): JSX.Element => {
  const [board, setBoard] = useState<(null | string)[]>(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState<boolean>(true);

  const winner = calculateWinner(board);

  const handleClick = (index: number): void => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const restartGame = (): void => {
    setBoard([...Array(9).fill(null)]);
    setXisNext(true);
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="wrapper">
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        <button id="restart-btn" onClick={restartGame}>
          Restart
        </button>
      </div>
    </>
  );
};

export default Game;
