import {
  CHANGE_TEST_STATUS_SUCCESS,
  CHANGE_TEST_STATUS_FAILURE,
  CHANGE_TEST_STATUS_REQUEST,
  GET_CLASS_INFO_FAILURE,
  GET_CLASS_INFO_REQUEST,
  GET_CLASS_INFO_SUCCESS,
} from "../actionTypes";

const initialState = {
  isRequesting: false,
  userId: 385,
  chemistry: [],
  message: "",
  error: "",
};

function subjectsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CLASS_INFO_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case GET_CLASS_INFO_FAILURE:
      return {
        ...state,
        isRequesting: false,
        message: "Что-то пошло не так...",
        error: payload,
      };
    case GET_CLASS_INFO_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        chemistry: [...payload],
      };
    case CHANGE_TEST_STATUS_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case CHANGE_TEST_STATUS_FAILURE:
      return {
        ...state,
        isRequesting: false,
        message: "Что-то пошло не так...",
        error: payload,
      };
    case CHANGE_TEST_STATUS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
      };
    // case CHANGE_TEST_STATUS:
    //   return {
    //     ...state,
    //     chemistry: state.chemistry.map((item) => {
    //       return item.id === payload
    //         ? { ...item, status: "waiting" }
    //         : { ...item };
    //     }),
    //   };

    default:
      return state;
  }
}

export default subjectsReducer;
