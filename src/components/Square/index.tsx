import "./style.css";

type Props = {
  value: null | string;
  onClick: () => void;
};

const Square = ({ value, onClick }: Props): JSX.Element => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
