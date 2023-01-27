import { createSlice } from '@reduxjs/toolkit';
import getUser from './githubAPI';

const initialState = {
  success: null,
  error: null,
  user: null,
  repo: null,
  commits: null,
  loading: false,
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    closeAlert: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { closeAlert } = githubSlice.actions;

export const getUserData = (state) => state.github;

export default githubSlice.reducer;
