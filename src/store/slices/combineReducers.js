import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
import userCounter from './userSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
  user: userCounter,
});
