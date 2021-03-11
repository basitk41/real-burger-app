import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = ({ type, label, add, remove, ingredients }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      {ingredients.findIndex((items) => items.item === type) >= 0 ? (
        <button onClick={() => remove(type)} className={classes.Less}>
          Less
        </button>
      ) : (
        <button className={classes.Less} disabled={true}>
          Less
        </button>
      )}

      <button onClick={() => add(type)} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
