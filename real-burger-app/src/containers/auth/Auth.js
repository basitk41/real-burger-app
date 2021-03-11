import React, { Component } from "react";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import * as actionsCreator from "../../store/actions/Index";
import Spinner from "../../components/UI/spinner/Spinner";
import { Redirect } from "react-router-dom";
class Auth extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
    redirectPath: "",
    showErrorMsg: false,
    isSignup: true,
  };

  formHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.user.email,
      this.state.user.password,
      this.state.isSignup
    );
  };
  SwitchHandle = () => {
    this.setState({ isSignup: !this.state.isSignup });
  };
  render() {
    const dis = this.state.user.password.length >= 6 ? false : true;
    return (
      <div className={classes.Auth}>
        <h3>{this.state.isSignup ? "Sign up form" : "Sign in"}</h3>
        {this.props.error ? (
          <p style={{ color: "red" }}>{this.props.error.message}</p>
        ) : null}
        <form onSubmit={this.formHandler}>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <div className={classes.InputDiv}>
              <Input
                label="Email"
                inputtype="input"
                type="email"
                name="email"
                value={this.state.user.email}
                required={true}
                placeholder="Your Email"
                onChange={(e) => {
                  const user = { ...this.state.user };
                  user.email = e.target.value;
                  this.setState({ user });
                }}
              />
              <Input
                label="Password"
                inputtype="input"
                type="password"
                name="password"
                value={this.state.user.password}
                required={true}
                placeholder="Your Password"
                onChange={(e) => {
                  const user = { ...this.state.user };
                  user.password = e.target.value;
                  this.setState({ user, showErrorMsg: true });
                }}
              />
              {this.state.showErrorMsg ? (
                this.state.user.password.length < 6 ? (
                  <p style={{ color: "red" }}>
                    password's min length should be 6 characters.
                  </p>
                ) : (
                  <p style={{ color: "green" }}>password strong enough.</p>
                )
              ) : null}
              <Button dis={dis} btnType="Success">
                {this.state.isSignup ? "Sign up" : "Sign in"}
              </Button>
            </div>
          )}
        </form>
        <Button clicked={this.SwitchHandle} btnType="Danger">
          {this.state.isSignup ? "Switch to Sign in" : "Switch to Sign up"}
        </Button>

        {this.props.ings.length > 0 ? (
          this.props.isAuth ? (
            <Redirect to="/checkout" />
          ) : null
        ) : this.props.isAuth ? (
          <Redirect to="/" />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    ings: state.burgerBuilder.ingredients,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actionsCreator.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
