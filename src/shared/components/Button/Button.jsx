import React from "react";
import './button.css'

const Button = ({
  text,
  onClick,
  bgColor = "#6C4CEB",
  textColor = "#FFFFFF",
  borderColor = "transparent",
  width = "auto",
  height = "44px",
  disabled = false,
  borderRadius = "10px",
  fontSize = "16px",
  fontWeight = "500",
}) => {
  return (
    <button
      className="common-button"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        width,
        height,
        borderRadius,
        fontSize,
        fontWeight,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
