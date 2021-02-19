import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  TOGGLE_BIO_MODAL,
  TOGGLE_CHEM_MODAL,
} from "../actionTypes";
import setAuthTokenHeader from "../../services/configure";
import history from "../history";
//import history from "../history";
export function toggleBioModal() {
  return {
    type: TOGGLE_BIO_MODAL,
  };
}
export function toggleChemModal() {
  return {
    type: TOGGLE_CHEM_MODAL,
  };
}
export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function logOut() {
  localStorage.clear();
  //history.push("/");
  return {
    type: LOG_OUT,
  };
}

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("http://localhost:3001/login", userData);
    const { token, ...user } = response.data;
    setAuthTokenHeader(token);
    localStorage.setItem("token", token);
    dispatch(loginSuccess(user));
    history.push("/home");
  } catch (e) {
    dispatch(loginFailure(e.message));
  }
};
