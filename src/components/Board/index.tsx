import Square from "../Square";
import "./style.css";

type Props = {
  squares: (null | string)[];
  onClick: (arg0: number) => void;
};

const Board = ({ squares, onClick }: Props): JSX.Element => (
  <div className="board">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
