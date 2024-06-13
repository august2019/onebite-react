import "./Button.scss";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn__${type}`}
    >
      {text}
    </button>
  );
};

export default Button;
