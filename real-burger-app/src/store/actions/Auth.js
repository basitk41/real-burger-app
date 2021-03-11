import * as actions from "./ActionTypes";
import axios from "axios";
export const auth_success = (token, userId) => {
  return {
    type: actions.AUTH_SUCCESS,
    token,
    userId,
  };
};
export const auth_fail = (error) => {
  return {
    type: actions.AUTH_FAIL,
    error,
  };
};
export const auth_loading = () => {
  return {
    type: actions.AUTH_LOADING,
  };
};
export const auth_logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: actions.AUTH_LOGOUT,
  };
};
export const auth_timeout = (timeout) => {
  console.log(timeout);
  return (dispatch) => {
    setTimeout(() => {
      dispatch(auth_logout());
    }, timeout + 500);
  };
};
export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(auth_loading());
    const user = {
      email,
      password,
      returnSecureToken: true,
    };
    let url = "";
    if (isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCu4Ldr2t-KElVBu9L-dyN52csbGX58r4E";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCu4Ldr2t-KElVBu9L-dyN52csbGX58r4E";
    }
    axios
      .post(url, user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        dispatch(auth_success(response.data.idToken, response.data.localId));
        dispatch(auth_timeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(auth_fail(error.response.data.error));
      });
    setTimeout(() => {}, 1000);
  };
};
