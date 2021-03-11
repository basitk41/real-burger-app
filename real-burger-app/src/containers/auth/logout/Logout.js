import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionsCreator from "../../../store/actions/Index";
class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionsCreator.auth_logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
