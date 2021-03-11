import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";
const Logo = ({ height }) => {
  return (
    <div className={classes.Logo}>
      {/* <div className={classes.Logo} style={{ height: height }}> */}
      <img src={burgerLogo} alt="BurgerLogo" />
    </div>
  );
};

export default Logo;
