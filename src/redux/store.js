import { combineReducers, legacy_createStore as createStore } from "redux";
import { setUserReducer } from "./user/reducer";
// import { uuid } from "uuidv4";

export const store = createStore(
  combineReducers({
    user: setUserReducer,
  })
);