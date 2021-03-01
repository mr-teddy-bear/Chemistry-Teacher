import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  TOGGLE_CHEM_MODAL,
  TOGGLE_BIO_MODAL,
  CHANGE_MESSAGE,
} from "../actionTypes";

const initialState = {
  isRequesting: false,
  isChemModal: false,
  isBioModal: false,
  message: "",
};

function loginReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    case TOGGLE_CHEM_MODAL:
      return {
        ...state,
        isChemModal: !state.isChemModal,
      };
    case TOGGLE_BIO_MODAL:
      return {
        ...state,
        isBioModal: !state.isBioModal,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: payload,
        message: "Неверный логин или пароль",
        isRequesting: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: { username: payload.user },
        isAuth: true,
        isRequesting: false,
        isChemModal: false,
        isBioModal: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
}

export default loginReducer;
