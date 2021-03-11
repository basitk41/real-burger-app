import * as actionsType from "./ActionTypes";
import axios from "../../axiosOrders";

export const order_success = (id, orderData) => {
  return {
    type: actionsType.ORDER_SUCCESS,
    id,
    orderData,
  };
};
export const order_fail = () => {
  return {
    type: actionsType.ORDER_FAIL,
  };
};
export const loading_order = () => {
  return {
    type: actionsType.LOADING_ORDER,
  };
};
export const order = (order, token) => {
  return (dispatch) => {
    dispatch(loading_order());
    axios
      .post("/orders.json?auth=" + token, order)
      .then((response) => {
        dispatch(order_success(response.data.name, order));
      })
      .catch((error) => {
        dispatch(order_fail());
      });
    dispatch(order_purchased_true());
  };
};
export const order_purchased_true = () => {
  return {
    type: actionsType.ORDER_PURCHASED_TRUE,
  };
};
export const order_purchased_false_spinner = () => {
  return {
    type: actionsType.ORDER_PURCHASED_FALSE,
  };
};
export const order_purchased_false = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(order_purchased_false_spinner());
    }, 1000);
  };
};
export const order_fetch_success = (orders) => {
  return {
    type: actionsType.ORDER_FETCH_SUCCESS,
    orders,
  };
};
export const order_fetch_fail = () => {
  return {
    type: actionsType.ORDER_FETCH_FAIL,
  };
};
export const order_fetch = (token, userId) => {
  return (dispatch) => {
    dispatch(loading_order());
    axios
      .get("/orders.json?auth=" + token)
      .then((response) => {
        const orders = [];
        for (let key in response.data) {
          if (response.data[key].userId === userId) {
            orders.push({ id: key, ...response.data[key] });
          }
        }
        dispatch(order_fetch_success(orders));
      })
      .catch((error) => {
        dispatch(order_fetch_fail());
      });
  };
};
