import React from "react";
import classes from "./Button.module.css";
const Button = ({ clicked, children, btnType, dis }) => {
  return (
    <button
      className={[classes.Button, classes[btnType]].join(" ")}
      onClick={clicked}
      disabled={dis}
    >
      {children}
    </button>
  );
};

export default Button;
