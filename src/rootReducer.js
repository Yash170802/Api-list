import { combineReducers } from "redux";

import loginReducer from "./components/Login/login.reducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
