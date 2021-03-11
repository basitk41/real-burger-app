import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./contactData/ContactData";
import { connect } from "react-redux";
class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contactData");
  };
  render() {
    return (
      <div>
        {this.props.ings.length === 0 ? (
          <Redirect to="/" />
        ) : this.props.purchased ? (
          <Redirect to="/" />
        ) : (
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
        )}
        <Route
          path={this.props.match.path + "/contactData"}
          component={ContactData}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps, null)(Checkout);
