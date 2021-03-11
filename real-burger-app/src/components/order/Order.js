import React from "react";
import classes from "./Order.module.css";
const Order = ({ price, ingredients }) => {
  const orderIngredient = ingredients.reduce((obj, current) => {
    if (!obj[current.item]) {
      obj[current.item] = 1;
    } else {
      obj[current.item]++;
    }
    return obj;
  }, {});
  return (
    <div className={classes.Order}>
      <p>
        Ingredients:
        <br />
        <br />
        <span>
          Meat:{orderIngredient["meat"] ? orderIngredient["meat"] : 0}
        </span>{" "}
        <span>
          Cheese:{orderIngredient["cheese"] ? orderIngredient["cheese"] : 0}
        </span>{" "}
        <span>
          Salad:{orderIngredient["salad"] ? orderIngredient["salad"] : 0}
        </span>{" "}
        <span>
          Bacon:{orderIngredient["bacon"] ? orderIngredient["bacon"] : 0}
        </span>
      </p>
      <p>
        Price: <strong>USD {price}</strong>
      </p>
    </div>
  );
};

export default Order;
