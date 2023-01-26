import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  factorials: [],
  error: null,
  success: null,
};
const countFact = (n) => (n === 0 ? 1 : n * countFact(n - 1));
export const factorialSlice = createSlice({
  name: 'factorial',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    calculate: (state, action) => {
      let fact = countFact(parseInt(action.payload));
      state.factorials = [...state.factorials, { fact, val: action.payload }];
    },
  },
});

export const { calculate } = factorialSlice.actions;

export const getFactorials = (state) => state.factorial.factorials;

export default factorialSlice.reducer;
