import React from "react";
import Logo from "../../logo/Logo";
import NavigationItems from "../navigationItems/NavigationItems";
import SideDrawerToggle from "../sideDrawer/sideDrawerToggle/SideDrawerToggle";
import classes from "./Toolbar.module.css";
const Toolbar = ({ sideDrawerToggle }) => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerToggle sideDrawerToggle={sideDrawerToggle} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
