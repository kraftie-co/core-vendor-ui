import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
import userReducer from './userSlice';
import productsReducer from './productsSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  products: productsReducer,
});
