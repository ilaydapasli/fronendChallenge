import { usersReducers } from "./usersReducers";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  users: usersReducers,
});
