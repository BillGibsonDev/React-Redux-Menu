import { combineReducers } from 'redux';

import cart from './cart.js';
import products from './products.js';

export const reducers = combineReducers({ 
    products, cart
});