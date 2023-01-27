import { v4 as uuid } from "uuid";
import { SET_USER, DELETE_USER } from "../actionTypes";

export const userInitialState = { email: null };

export const setUserReducer = (state = userInitialState, action) => {
  if (action.type === SET_USER) {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === DELETE_USER) {
    return {
      email: null,
      password: null,
    };
  }
  return state;
};
