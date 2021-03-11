import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./burgerIngredient/BurgerIngredient";
const Burger = ({ ingredients }) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients.length > 0 ? (
        ingredients.map((ingredient, index) => {
          return <BurgerIngredient key={index} type={ingredient.item} />;
        })
      ) : (
        <p>Please start adding ingredients! </p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
