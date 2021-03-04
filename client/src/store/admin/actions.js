import axios from "axios";
import {
  GET_RAZDEL_INFO_FAILURE,
  GET_RAZDEL_INFO_REQUEST,
  GET_RAZDEL_INFO_SUCCESS,
  ADD_RAZDEL_FAILURE,
  ADD_RAZDEL_REQUEST,
  ADD_RAZDEL_SUCCESS,
  CHANGE_MESSAGE,
  DELETE_RAZDEL_FAILURE,
  DELETE_RAZDEL_REQUEST,
  DELETE_RAZDEL_SUCCESS,
  GET_TEST_FAILURE,
  GET_TEST_REQUEST,
  GET_TEST_SUCCESS,
  ADD_TEST_FAILURE,
  ADD_TEST_REQUEST,
  ADD_TEST_SUCCESS,
  DELETE_TEST_FAILURE,
  DELETE_TEST_REQUEST,
  DELETE_TEST_SUCCESS,
  GET_QUESTION_FAILURE,
  GET_QUESTION_REQUEST,
  GET_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
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
    type: GET_RAZDEL_INFO_FAILURE,
    payload: message,
  };
}
export function getClassInfoSuccess(classInfo) {
  return {
    type: GET_RAZDEL_INFO_SUCCESS,
    payload: classInfo,
  };
}
export function getClassInfoRequest() {
  return {
    type: GET_RAZDEL_INFO_REQUEST,
  };
}

export function addRazdelFailure(message) {
  return {
    type: ADD_RAZDEL_FAILURE,
    payload: message,
  };
}
export function addRazdelSuccess(allRazdels) {
  return {
    type: ADD_RAZDEL_SUCCESS,
    payload: allRazdels,
  };
}
export function addRazdelRequest() {
  return {
    type: ADD_RAZDEL_REQUEST,
  };
}
export function deleteRazdelFailure(message) {
  return {
    type: DELETE_RAZDEL_FAILURE,
    payload: message,
  };
}
export function deleteRazdelSuccess(allRazdels) {
  return {
    type: DELETE_RAZDEL_SUCCESS,
    payload: allRazdels,
  };
}
export function deleteRazdelRequest() {
  return {
    type: DELETE_RAZDEL_REQUEST,
  };
}
export function getTestFailure(message) {
  return {
    type: GET_TEST_FAILURE,
    payload: message,
  };
}
export function getTestSuccess(allTests) {
  return {
    type: GET_TEST_SUCCESS,
    payload: allTests,
  };
}
export function getTestRequest() {
  return {
    type: GET_TEST_REQUEST,
  };
}
export function addTestFailure(message) {
  return {
    type: ADD_TEST_FAILURE,
    payload: message,
  };
}
export function addTestSuccess(allTests) {
  return {
    type: ADD_TEST_SUCCESS,
    payload: allTests,
  };
}
export function addTestRequest() {
  return {
    type: ADD_TEST_REQUEST,
  };
}
export function deleteTestFailure(message) {
  return {
    type: DELETE_TEST_FAILURE,
    payload: message,
  };
}
export function deleteTestSuccess(allTests) {
  return {
    type: DELETE_TEST_SUCCESS,
    payload: allTests,
  };
}
export function deleteTestRequest() {
  return {
    type: DELETE_TEST_REQUEST,
  };
}
export function getQuestionFailure(message) {
  return {
    type: GET_QUESTION_FAILURE,
    payload: message,
  };
}
export function getQuestionSuccess(allQuestion) {
  return {
    type: GET_QUESTION_SUCCESS,
    payload: allQuestion,
  };
}
export function getQuestionRequest() {
  return {
    type: GET_QUESTION_REQUEST,
  };
}
export function addQuestionFailure(message) {
  return {
    type: ADD_QUESTION_FAILURE,
    payload: message,
  };
}
export function addQuestionSuccess(allQuestion) {
  return {
    type: ADD_QUESTION_SUCCESS,
    payload: allQuestion,
  };
}
export function addQuestionRequest() {
  return {
    type: ADD_QUESTION_REQUEST,
  };
}
export function deleteQuestionFailure(message) {
  return {
    type: DELETE_QUESTION_FAILURE,
    payload: message,
  };
}
export function deleteQuestionSuccess(allQuestion) {
  return {
    type: DELETE_QUESTION_SUCCESS,
    payload: allQuestion,
  };
}
export function deleteQuestionRequest() {
  return {
    type: DELETE_QUESTION_REQUEST,
  };
}

export const getClassInfo = () => async (dispatch) => {
  dispatch(getClassInfoRequest());
  try {
    const classInfo = await axios.get("http://localhost:3001/admin/razdels");

    dispatch(getClassInfoSuccess(classInfo.data));
  } catch (e) {
    dispatch(getClassInfoFailure(e.message));
  }
};

export const addRazdel = (razdelData) => async (dispatch) => {
  dispatch(addRazdelRequest());
  try {
    const allRazdels = await axios.post(
      "http://localhost:3001/admin/razdels",
      razdelData
    );
    dispatch(addRazdelSuccess(allRazdels.data));
  } catch (e) {
    dispatch(addRazdelFailure(e.message));
  }
};

export const deleteRazdel = (id) => async (dispatch) => {
  dispatch(deleteRazdelRequest());
  try {
    const allRazdels = await axios.delete(
      "http://localhost:3001/admin/razdels",
      { data: { id } }
    );
    dispatch(deleteRazdelSuccess(allRazdels.data));
  } catch (e) {
    dispatch(deleteRazdelFailure(e.message));
  }
};

export const getTest = () => async (dispatch) => {
  dispatch(getTestRequest());
  try {
    const allTest = await axios.get("http://localhost:3001/admin/test");

    dispatch(getTestSuccess(allTest.data));
  } catch (e) {
    dispatch(getTestFailure(e.message));
  }
};

export const addTest = (testData) => async (dispatch) => {
  dispatch(addTestRequest());
  try {
    const allTests = await axios.post(
      "http://localhost:3001/admin/test",
      testData
    );
    dispatch(addTestSuccess(allTests.data));
  } catch (e) {
    dispatch(addTestFailure(e.message));
  }
};

export const deleteTest = (id) => async (dispatch) => {
  dispatch(deleteTestRequest());
  try {
    const allTests = await axios.delete("http://localhost:3001/admin/test", {
      data: { id },
    });
    dispatch(deleteTestSuccess(allTests.data));
  } catch (e) {
    dispatch(deleteTestFailure(e.message));
  }
};

export const getQuestion = () => async (dispatch) => {
  dispatch(getQuestionRequest());
  try {
    const allQuestion = await axios.get("http://localhost:3001/admin/question");

    dispatch(getQuestionSuccess(allQuestion.data));
  } catch (e) {
    dispatch(getQuestionFailure(e.message));
  }
};

export const addQuestion = (questionData) => async (dispatch) => {
  dispatch(addQuestionRequest());
  try {
    const allQuestion = await axios.post(
      "http://localhost:3001/admin/question",
      questionData
    );
    dispatch(addQuestionSuccess(allQuestion.data));
  } catch (e) {
    dispatch(addQuestionFailure(e.message));
  }
};

export const deleteQuestion = (id) => async (dispatch) => {
  dispatch(deleteQuestionRequest());
  try {
    const allQuestion = await axios.delete(
      "http://localhost:3001/admin/question",
      {
        data: { id },
      }
    );
    dispatch(deleteQuestionSuccess(allQuestion.data));
  } catch (e) {
    dispatch(deleteQuestionFailure(e.message));
  }
};
