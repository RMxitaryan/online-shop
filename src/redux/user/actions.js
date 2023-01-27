import { SET_USER, DELETE_USER } from "../actionTypes";

export const setUser = (payload) => {
  return { type: SET_USER, payload };
};

export const deleteUser = (payload) => {
  return { type: DELETE_USER, payload };
};
