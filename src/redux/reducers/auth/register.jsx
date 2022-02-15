import { createSlice } from '@reduxjs/toolkit';
import { registerAccount } from '../../actions/auth/register';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      return state;
    },
  },
  extraReducers: {
    [registerAccount.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [registerAccount.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      return state;
    },
    [registerAccount.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      return state;
    },
  },
});

export const { clearState } = registerSlice.actions;

export const registerSelector = (state) => state.register;
