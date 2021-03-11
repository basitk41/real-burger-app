import React, { Component } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./navigationItem/NavigationItem";
import { connect } from "react-redux";
class NavigationItems extends Component {
  render() {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {this.props.isAuth ? (
          <NavigationItem link="/orders">Orders</NavigationItem>
        ) : null}
        {this.props.isAuth ? (
          <NavigationItem link="/logout">Logout</NavigationItem>
        ) : (
          <NavigationItem link="/auth">Authenticate</NavigationItem>
        )}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};
export default connect(mapStateToProps, null)(NavigationItems);
