import { combineReducers } from "redux";
import loginReducer from "./authReducer";
import exploreReducer from "./exploreReducer";
import photoReducer from "./photoReducer";
const rootReducer = combineReducers({
  loginReducer,
  photoReducer,
  exploreReducer,
});

export default rootReducer;
