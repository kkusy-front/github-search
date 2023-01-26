import { configureStore } from '@reduxjs/toolkit';
import factorialSlice from '../features/factorial/factorialSlice';

export const store = configureStore({
  reducer: {
    factorial: factorialSlice,
  },
});
