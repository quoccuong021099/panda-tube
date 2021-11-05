import { combineReducers } from "redux";
import loginReducer from "./authReducer";
import photoReducer from "./photoReducer";
const rootReducer = combineReducers({
  loginReducer,
  photoReducer,
});

export default rootReducer;
