import axios from "axios";
import {
  CHANGE_TEST_STATUS,
  FINISHED_TEST_FAILURE,
  FINISHED_TEST_REQUEST,
  FINISHED_TEST_SUCCESS,
} from "../actionTypes";
import setAuthTokenHeader from "../../services/configure";
import history from "../history";

export function finishedTestFailure() {
  return {
    type: FINISHED_TEST_FAILURE,
  };
}
export function finishedTestSuccess() {
  return {
    type: FINISHED_TEST_SUCCESS,
  };
}
export function finishedTestRequest(test) {
  return {
    type: FINISHED_TEST_REQUEST,
    payload: test,
  };
}
export function changeStatus(testNumber) {
  return {
    type: CHANGE_TEST_STATUS,
    payload: testNumber,
  };
}
export const finishedTest = (test) => async (dispatch) => {
  dispatch(finishedTestRequest());
  try {
    //const response = await axios.post("http://localhost:3001/login", test);
    //const { test} = response.data;
    dispatch(finishedTestSuccess(test));
    history.push("/chemistry");
  } catch (e) {
    dispatch(finishedTestFailure(e.message));
  }
};
