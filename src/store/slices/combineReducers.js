import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
import userReducer from './userSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});
