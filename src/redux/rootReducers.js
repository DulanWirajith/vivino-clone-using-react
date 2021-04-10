import { combineReducers } from "redux";
import todoReducer from "./vivino/vivinoReducer";
// to add all reducers
export const rootReducer = combineReducers({
  todo: todoReducer,
});
