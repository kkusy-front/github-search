import { createSlice } from '@reduxjs/toolkit';
import { fetchRepos, getCommits } from './githubAPI';

const initialState = {
  repo: {
    success: null,
    error: null,
    loading: false,
    data: null,
  },
  commits: {
    success: null,
    error: null,
    loading: false,
    data: [],
  },
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    closeAlert: (state) => {
      state.repo.error = null;
    },
    clearState: (state) => {
      state.repo.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.repo.loading = true;
        state.repo.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repo.loading = false;
        state.repo.success = true;
        state.repo.data = action.payload.data;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.repo.loading = false;
        state.repo.success = false;
        state.repo.error = action.payload;
      })
      .addCase(getCommits.pending, (state) => {
        state.commits.loading = true;
        state.commits.error = null;
      })
      .addCase(getCommits.fulfilled, (state, action) => {
        state.commits.loading = false;
        state.commits.success = true;
        state.commits.data = action.payload.data;
      })
      .addCase(getCommits.rejected, (state, action) => {
        state.commits.loading = false;
        state.commits.success = false;
        state.commits.error = action.payload;
      });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { closeAlert, clearState } = githubSlice.actions;

export const getUserRepos = (state) => state.github.repo;
export const getUserCommits = (state) => state.github.commits;

export default githubSlice.reducer;
