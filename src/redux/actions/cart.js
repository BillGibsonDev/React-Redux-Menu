import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART, ADJUST_QTY } from '../constants/actionTypes.js';


export const getCart = payload => ({ type: GET_CART, payload: [] })

export const addToCart = ( product ) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
}

export const removeFromCart = ( index ) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      index,
    },
  };
}

export const adjustQty = (id, qty) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id,
      qty,
    },
  };
};