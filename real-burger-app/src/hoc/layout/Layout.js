import React, { Component } from "react";
import Aux from "../aux/Aux";
import SideDrawer from "../../components/navigation/sideDrawer/SideDrawer";
import Toolbar from "../../components/navigation/toolbar/Toolbar";
import classes from "./Layout.module.css";
class Layout extends Component {
  state = {
    sideDrawer: false,
  };
  sideDrawerCloseHandler = () => {
    this.setState({ sideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState({ sideDrawer: !this.state.sideDrawer });
  };
  render() {
    return (
      <Aux>
        <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler} />
        <SideDrawer
          sideDrawer={this.state.sideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
// const Layout = (props) => {
//   return (
//     <Aux>
//       <Toolbar />
//       <SideDrawer />
//       <main className={classes.content}>{props.children}</main>
//     </Aux>
//   );
// };

// export default Layout;
