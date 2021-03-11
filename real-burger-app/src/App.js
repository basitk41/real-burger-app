import "./App.css";
import Layout from "./hoc/layout/Layout";
import BurgerBuilder from "./containers/burgerBuilder/BurgerBuilder";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Checkout from "./containers/checkout/Checkout";
// import Orders from "./containers/orders/Orders";
// import Auth from "./containers/auth/Auth";
// import Logout from "./containers/auth/logout/Logout";
import { connect } from "react-redux";
import * as actionsCreator from "./store/actions/Index";
import AsyncComponent from "./hoc/asyncComponent/AsyncComponent";
const AsyncCheckout = AsyncComponent(() => {
  return import("./containers/checkout/Checkout");
});
const AsyncOrders = AsyncComponent(() => {
  return import("./containers/orders/Orders");
});
const AsyncAuth = AsyncComponent(() => {
  return import("./containers/auth/Auth");
});
const AsyncLogout = AsyncComponent(() => {
  return import("./containers/auth/logout/Logout");
});

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    this.props.checkAuth(token, userId);
  }
  render() {
    let routes = null;

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={AsyncCheckout} />
          <Route path="/orders" component={AsyncOrders} />
          <Route path="/logout" component={AsyncLogout} />
          <Route path="/auth" component={AsyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path="/auth" component={AsyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
          {/* <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch> */}
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    ings: state.burgerBuilder.ingredients,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: (token, userId) =>
      dispatch(actionsCreator.auth_success(token, userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
