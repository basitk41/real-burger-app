import * as actions from "../actions/ActionTypes";
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        loading: false,
        error: null,
      };
    case actions.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actions.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};
export default reducer;
