import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/index.js";
import { thunk } from "redux-thunk"; // Bu, named import olmalı

const middlewares = applyMiddleware(thunk);

export const myStore = createStore(reducers, middlewares);
