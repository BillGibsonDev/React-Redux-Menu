import { REMOVE_FROM_CART, ADD_TO_CART, GET_CART, ADJUST_QTY } from '../constants/actionTypes';


const initialState = {
  cart: [],
}
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CART:
      return {
        ...state,
        cart: action.payload, 
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [ ...state.cart, {...action.payload, qty: 1} ], 
      };

    case REMOVE_FROM_CART:
      return {
        cart: [
          ...state.cart.slice(0, action.payload.index),
          ...state.cart.slice(action.payload.index + 1)
        ],
    }

    case ADJUST_QTY:
      return {
        cart: state.cart.map((product) =>
          product._id === action.payload.id
            ? { ...product, qty: action.payload.qty }
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