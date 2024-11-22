import React from "react";

const Button = ({ handleFunctions, label, bgColor }) => {
  return (
    <div>
      <button
        className={`py-2 px-8  text-white rounded-md mx-2 my-4 ${bgColor} uppercase`}
        onClick={handleFunctions}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
