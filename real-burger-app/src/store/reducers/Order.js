import * as actionType from "../actions/ActionTypes";
const initialState = {
  orders: [],
  loading: false,
  error: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.concat({ id: action.id, ...action.orderData }),
        loading: false,
      };
    case actionType.ORDER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionType.LOADING_ORDER:
      return {
        ...state,
        loading: true,
      };
    case actionType.ORDER_PURCHASED_TRUE:
      return {
        ...state,
        purchased: true,
      };
    case actionType.ORDER_PURCHASED_FALSE:
      return {
        ...state,
        purchased: false,
      };
    case actionType.ORDER_FETCH_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };
    case actionType.ORDER_FETCH_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
