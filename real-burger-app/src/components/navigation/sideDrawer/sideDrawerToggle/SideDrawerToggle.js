import React from "react";
import classes from "./SideDrawerToggle.module.css";
const SideDrawerToggle = ({ sideDrawerToggle }) => {
  return (
    <div className={classes.DrawerToggle} onClick={sideDrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SideDrawerToggle;
