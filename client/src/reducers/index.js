import { combineReducers } from "redux";
import countReducer from "./count";
import categoriesReducer from "./categories";

const allReducers = combineReducers({
  count: countReducer,
  categories: categoriesReducer,
});

export default allReducers;
