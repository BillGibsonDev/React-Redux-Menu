import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART, ADJUST_QTY, EDIT_REQUEST } from '../constants/actionTypes.js';

export const getCart = payload => ({ type: GET_CART });

export const addToCart = ( product, qty, request ) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      qty,
      request,
      order_id: Math.random()
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

export const requestEdit = (id, request) => {
  return {
    type: EDIT_REQUEST,
    payload: {
      id,
      request
    },
  };
};