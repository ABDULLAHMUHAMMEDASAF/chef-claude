import PropTypes from "prop-types";
import "./Pad.css";

function Pad({ id, color, on, onClick }) {
  return (
    <button
      className="pad"
      style={{ backgroundColor: color }}
      id={id}
      onClick={onClick}
    >
      {on ? "Açık" : "Kapalı"}
    </button>
  );
}

Pad.propTypes = {
  id: PropTypes.number,
  color: PropTypes.string,
  on: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Pad;
