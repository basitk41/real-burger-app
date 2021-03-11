import React, { Component } from "react";
import Button from "../../../components/UI/button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axiosOrders";
import Spinner from "../../../components/UI/spinner/Spinner";
import Input from "../../../components/UI/input/Input";
import WithErrorHandler from "../../../hoc/withErrorHandler/WithErrorHandler";
import { connect } from "react-redux";
import * as actionsCreator from "../../../store/actions/Index";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalcode: "",
    },
    deliveryMethod: "",
  };
  contactDataHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice.toFixed(2),
      customer: {
        name: this.state.name,
        email: this.state.email,
        address: {
          street: this.state.address.street,
          postalcode: this.state.address.postalcode,
        },
        deliveryMethod: this.state.deliveryMethod,
      },
      userId: this.props.userId,
    };
    this.props.onOrder(order, this.props.token);
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h3>Enter your contact details</h3>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.contactDataHandler}>
            <div className={classes.InputDiv}>
              <Input
                label="Name"
                inputtype="input"
                type="text"
                name="name"
                required={true}
                placeholder="Your Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Input
                label="Email"
                inputtype="input"
                type="email"
                name="email"
                required={true}
                placeholder="Your Mail"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Input
                label="Street"
                inputtype="input"
                type="text"
                name="street"
                required={true}
                placeholder="Your Street"
                onChange={(e) => {
                  const address = { ...this.state.address };
                  address.street = e.target.value;
                  this.setState({ address });
                }}
              />
              <Input
                label="PostalCode"
                inputtype="input"
                required={true}
                type="text"
                name="postalcode"
                placeholder="Your Postalcode"
                onChange={(e) => {
                  const address = { ...this.state.address };
                  address.postalcode = e.target.value;
                  this.setState({ address });
                }}
              />
              <Input
                label="Select delivery method"
                inputtype="select"
                required={true}
                onChange={(event) =>
                  this.setState({ deliveryMethod: event.target.value })
                }
              >
                <option value="" defaultValue>
                  Please select delivery method
                </option>
                <option value="cheapest">Cheapest</option>
                <option value="fastest">Fastest</option>
              </Input>
            </div>
            <Button btnType="Success">ORDER</Button>
          </form>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onOrder: (order, token) => dispatch(actionsCreator.order(order, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(ContactData, axios));
