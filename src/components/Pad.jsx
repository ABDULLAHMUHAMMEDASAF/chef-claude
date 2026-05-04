import PropTypes from "prop-types";
import "./Pad.css";

function Pad({ id, color, on }) {
  return (
    <>
      <button className="pad" style={{ backgroundColor: color }} id={id}>
        {on ? "Açık" : "Kapalı"}
      </button>
    </>
  );
}

Pad.propTypes = {
  id: PropTypes.number,
  color: PropTypes.string,
  on: PropTypes.bool,
};

export default Pad;
