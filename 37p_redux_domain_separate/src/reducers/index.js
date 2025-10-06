import { combineReducers } from "redux";
import themeReducer from "./themeReducers";
import loginReducer from "./loginReducers";

const rootReducer = combineReducers({
  theme: themeReducer,
  login: loginReducer,
});

export default rootReducer;