import React from "react";
import Burger from "../../burger/Burger";
import Button from "../../UI/button/Button";
import classes from "./CheckoutSummary.module.css";
const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h2>We hope it tastes well!</h2>
      <div
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
