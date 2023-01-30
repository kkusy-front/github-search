import { combineReducers } from '@reduxjs/toolkit';
import factorialSlice from '../features/factorial/factorialSlice';
import githubSlice from '../features/github/githubSlice';

const rootReducer = combineReducers({
  factorial: factorialSlice,
  github: githubSlice,
});

export default rootReducer;
