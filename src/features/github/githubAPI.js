import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'https://api.github.com';

export const getRepo = createAsyncThunk(
  'github/getRepo',
  async ({ login }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get(
        `${backendURL}/users/${login}/repos?per_page=5&sort=updated`,
        config,
      );
      return response;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getCommits = createAsyncThunk(
  'github/getCommits',
  async ({ user, title }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get(
        `${backendURL}/repos/${user}/${title}/commits?per_page=5`,
        config,
      );
      return response;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export default getRepo;
