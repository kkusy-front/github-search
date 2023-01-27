import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'https://api.github.com';

export const getUser = createAsyncThunk(
  'github/getUser',
  async ({ login }, { rejectWithValue }) => {
    console.log(login);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get(`${backendURL}/users/${login}/repos`, config);
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

export default getUser;
