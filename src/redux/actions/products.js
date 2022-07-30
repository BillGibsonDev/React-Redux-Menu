import { GET_PRODUCTS } from '../constants/actionTypes.js';

import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};