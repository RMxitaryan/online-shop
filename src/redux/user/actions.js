import {
  SET_USER,
  DELETE_USER,
  SET_CARD,
  SET_CARD_BASKET,
} from "../actionTypes";

export const setUser = (payload) => {
  return { type: SET_USER, payload };
};

export const deleteUser = (payload) => {
  return { type: DELETE_USER, payload };
};

export const setCard = (payload) => {
  return { type: SET_CARD, payload };
};

export const setBasket = (payload) => {
  return { type: SET_CARD_BASKET, payload };
};
