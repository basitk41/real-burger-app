import React from "react";
import Aux from "../../../hoc/aux/Aux";
import Logo from "../../logo/Logo";
import Backdrop from "../../UI/backdrop/Backdrop";
import NavigationItems from "../navigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = ({ sideDrawer, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (sideDrawer) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={sideDrawer} clicked={closed} />
      <div className={attachedClasses.join(" ")} onClick={closed}>
        <div className={classes.Logo}>
          <Logo height="11%" />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
