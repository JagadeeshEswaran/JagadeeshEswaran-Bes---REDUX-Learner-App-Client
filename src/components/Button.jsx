/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ title, handler, bsStyles, valueString }) => {
  console.log("Button component rendering...");

  return (
    // JSX AREA
    <button
      className={bsStyles}
      onClick={(e) => handler(valueString, e)}
      value={valueString}
    >
      {title}
    </button>
  );
};

export default Button;
