import React, { Component } from "react";
import Order from "../../components/order/Order";
import axios from "../../axiosOrders";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
import { connect } from "react-redux";
import * as actionsCreator from "../../store/actions/Index";
import Spinner from "../../components/UI/spinner/Spinner";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetch(this.props.token, this.props.userId);
  }
  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <div>
        {this.props.orders.map((order) => {
          return (
            <Order
              key={order.id}
              price={order.price}
              ingredients={order.ingredients}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (token, userId) =>
      dispatch(actionsCreator.order_fetch(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
