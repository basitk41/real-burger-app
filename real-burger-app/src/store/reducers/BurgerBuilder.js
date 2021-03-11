import * as actionType from "../actions/ActionTypes";
const initialState = {
  ingredients: [],
  totalPrice: 4,
  loading: true,
  error: false,
};

const INGREDIENTS_PRICES = {
  salad: 0.2,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, { item: action.item }],
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.item],
      };
    case actionType.REMOVE_INGREDIENT:
      const updatedIngredients = [...state.ingredients];
      updatedIngredients.reverse();
      const index = updatedIngredients.findIndex(
        (items) => items.item === action.item
      );
      if (index >= 0) {
        updatedIngredients.splice(index, 1);
        updatedIngredients.reverse();
      }
      return {
        ...state,
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.item],
      };
    case actionType.FETCHING_INGREDIENTS_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionType.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        loading: false,
      };

    default:
      return state;
  }
};
export default reducer;
