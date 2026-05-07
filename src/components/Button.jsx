import PropTypes from "prop-types";

function Button({ text, variant }) {
  const styles = {
    primary: {
      backgroundColor: "black",
      padding: "12px 24px",
      color: "white",
      appearance: "none",
      outline: "none",
      borderRadius: "5px",
      fontWeight: "600",
      boxShadow: "0 2px 8px tomato",
      cursor: "pointer",
    },
    secondary: {
      backgroundColor: "tomato",
      padding: "12px 24px",
      color: "black",
      appearance: "none",
      outline: "none",
      border: "none",
      borderRadius: "5px",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return <button style={styles[variant]}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
