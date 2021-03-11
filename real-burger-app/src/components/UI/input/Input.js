import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={classes.InputElement} {...props} />;
      break;
    case "select":
      inputElement = (
        <select className={classes.InputElement} {...props}>
          {props.children}
        </select>
      );
      break;

    default:
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
