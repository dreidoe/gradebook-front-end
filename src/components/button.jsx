import PropTypes from "prop-types";

export default function Button({ type, color, text }) {
  return (
    <>
      <button
        type="{type}"
        className={`rounded${color}-500px-4 py-2 text-white hover:${color}-600`}
      >
        {text}
      </button>
    </>
  );
}

Button.defaultProps = {
  color: "bg-green",
  type: "button",
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
