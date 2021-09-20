import { combineReducers } from "redux";
import countReducer from "./count";

const allReducers = combineReducers({
  count: countReducer,
});

export default allReducers;
