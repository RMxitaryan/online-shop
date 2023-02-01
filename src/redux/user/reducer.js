import { v4 as uuid } from "uuid";
import { SET_USER, DELETE_USER, SET_CARD } from "../actionTypes";

export const userInitialState = { email: null, userName: null };

export const setUserReducer = (state = userInitialState, action) => {
  if (action.type === SET_USER) {
    return {
      ...state,
      email: action.payload.email,
      userName: action.payload.userName,
    };
  }
  if (action.type === DELETE_USER) {
    return {
      email: null,
      userName: null,
    };
  }
  return state;
};

export const setCardReduser = (state = [], action) => {
  if (action.type === SET_CARD) {
    return action.payload;
  }
  return state;
};
