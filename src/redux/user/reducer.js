import { v4 as uuid } from "uuid";
import {
  SET_USER,
  DELETE_USER,
  SET_CARD,
  SET_CARD_BASKET,
} from "../actionTypes";

// export const userInitialState = {
//   // email: null,
//   // firstName: null,
//   // lastName: null,
//   // phone: null,
//   // url: null,
// };

export const userInitialState = [];
export const setUserReducer = (state = userInitialState, action) => {
  if (action.type === SET_USER) {
    return {
      ...state,
      email: action.payload.email,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      phone: action.payload.phone,
      url: action.payload.url,
    };
  }
  if (action.type === DELETE_USER) {
    return {
      email: null,
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
// export const setUserReducer = (state = userInitialState, action) => {
//   if (action.type === SET_USER) {
//     const newProps = { ...action.payload };
//     return state.concat(newProps);
//   }
//   if (action.type === DELETE_USER) {
//     return {
//       email: null,
//     };
//   }
//   return state;
// };

// export const setCardReduser = (state = [], action) => {
//   if (action.type === SET_CARD) {
//     return [...state, action.payload];
//   }
//   return state;
// };
export const setBasketReduser = (state = [], action) => {
  if (action.type === SET_CARD_BASKET) {
    return action.payload;
  }
  return state;
};
