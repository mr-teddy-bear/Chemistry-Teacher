import axios from "axios";
import {
  CHANGE_TEST_STATUS_FAILURE,
  CHANGE_TEST_STATUS_REQUEST,
  CHANGE_TEST_STATUS_SUCCESS,
  GET_CLASS_INFO_FAILURE,
  GET_CLASS_INFO_REQUEST,
  GET_CLASS_INFO_SUCCESS,
  CHANGE_MESSAGE,
} from "../actionTypes";
import history from "../history";

export function changeMessage(message) {
  return {
    type: CHANGE_MESSAGE,
    payload: message,
  };
}
export function getClassInfoFailure(message) {
  return {
    type: GET_CLASS_INFO_FAILURE,
    payload: message,
  };
}
export function getClassInfoSuccess(classInfo) {
  return {
    type: GET_CLASS_INFO_SUCCESS,
    payload: classInfo,
  };
}
export function getClassInfoRequest() {
  return {
    type: GET_CLASS_INFO_REQUEST,
  };
}
export function changeStatusRequest() {
  return {
    type: CHANGE_TEST_STATUS_REQUEST,
  };
}
export function changeStatusFailure(message) {
  return {
    type: CHANGE_TEST_STATUS_FAILURE,
    payload: message,
  };
}
export function changeStatusSuccess(classInfo) {
  return {
    type: CHANGE_TEST_STATUS_SUCCESS,
    payload: classInfo,
  };
}
export const getClassInfo = () => async (dispatch) => {
  dispatch(getClassInfoRequest());
  try {
    const classInfo = await axios.get("http://localhost:3001/chemistry");

    dispatch(getClassInfoSuccess(classInfo.data));
  } catch (e) {
    dispatch(getClassInfoFailure(e.message));
  }
};
export const changeStatus = (title, subtitle, status) => async (dispatch) => {
  dispatch(changeStatusRequest());
  try {
    const classInfo = await axios.post("http://localhost:3001/chemistry", {
      title,
      subtitle,
      status,
    });
    dispatch(changeStatusSuccess(classInfo.data));
  } catch (e) {
    dispatch(changeStatusFailure(e.message));
  }
};
