import { REMOVE_FROM_CART, ADD_TO_CART, GET_CART, ADJUST_QTY, EDIT_REQUEST } from '../constants/actionTypes';

const initialState = {
  cart: [],
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: [...state.cart], 
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [ ...state.cart, { ...action.payload } ], 
      };
    case REMOVE_FROM_CART:
      return {
        cart: [
          ...state.cart.slice(0, action.payload.index),
          ...state.cart.slice(action.payload.index + 1)
        ],
      };
    case ADJUST_QTY:
      return {
        cart: state.cart.map((product) =>
          product.order_id === action.payload.id
            ? { ...product, qty: action.payload.qty }
            : product
        ),
      };
      case EDIT_REQUEST:
      return {
        cart: state.cart.map((product) =>
          product.order_id === action.payload.id
            ? { ...product, request: action.payload.request }
            : product
        ),
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;