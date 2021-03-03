import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loginReducer from "./auth/reducer";
import subjectsReducer from "./subjects/reducer";
import adminReducer from "./admin/reducer";
import history from "./history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: loginReducer,
  subjects: subjectsReducer,
  admin: adminReducer,
});

export default rootReducer;
