import React, { Component } from "react";
import BuildControls from "../../components/burger/buildControls/BuildControls";
import Burger from "../../components/burger/Burger";
import OrderSummary from "../../components/burger/orderSummary/OrderSummary";
import Modal from "../../components/UI/modal/Modal";
import Aux from "../../hoc/aux/Aux";
import axios from "../../axiosOrders";
import Spinner from "../../components/UI/spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
import * as actionsCreator from "../../store/actions/Index";
import { connect } from "react-redux";
class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
  };
  componentDidMount() {
    this.props.fetchingIngs();
    this.props.resetPurchased();
  }
  purchaseHandler = () => {
    if (this.props.isAuth) {
      this.setState({ purchasing: true });
    } else {
      this.props.history.push("/auth");
    }
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };
  updatePurchasable = (ingredients) => {
    return ingredients.length > 0;
  };
  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {" "}
          {this.props.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.props.ings}
              purchaseCanceled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              totalPrice={this.props.totalPrice}
            ></OrderSummary>
          )}
        </Modal>
        {this.props.loading && !this.state.purchasing ? (
          this.props.error ? (
            <p>Ingredients Not loaded!</p>
          ) : (
            <Spinner />
          )
        ) : (
          <Aux>
            {this.props.purchased ? (
              <Spinner />
            ) : (
              <Burger ingredients={this.props.ings} />
            )}
            <BuildControls
              isAuth={this.props.isAuth}
              addIngredient={this.props.addIngs}
              removeIngredient={this.props.removeIngs}
              ingredients={this.props.ings}
              price={this.props.totalPrice}
              purchasable={this.updatePurchasable(this.props.ings)}
              purchasing={this.purchaseHandler}
            />
          </Aux>
        )}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.burgerBuilder.loading,
    error: state.burgerBuilder.error,
    purchased: state.order.purchased,
    isAuth: state.auth.token !== null,
  };
};
const mapdispatchToProps = (dispatch) => {
  return {
    addIngs: (item) => dispatch(actionsCreator.add_ingredient(item)),
    removeIngs: (item) => dispatch(actionsCreator.remove_ingredient(item)),
    fetchingIngs: () => dispatch(actionsCreator.fetching_ingredients()),
    resetPurchased: () => dispatch(actionsCreator.order_purchased_false()),
  };
};

export default connect(
  mapStateToProps,
  mapdispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
