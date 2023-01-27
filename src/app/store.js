import { configureStore } from '@reduxjs/toolkit';
import factorialSlice from '../features/factorial/factorialSlice';
import githubSlice from '../features/github/githubSlice';

export const store = configureStore({
  reducer: {
    factorial: factorialSlice,
    github: githubSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
