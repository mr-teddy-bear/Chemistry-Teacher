import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loginReducer from "./auth/reducer";
import subjectsReducer from "./subjects/reducer";

import history from "./history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: loginReducer,
  subjects: subjectsReducer,
});

export default rootReducer;
