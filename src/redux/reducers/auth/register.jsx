import { createSlice } from '@reduxjs/toolkit';
import { registerAccount } from '../../actions/auth/register';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    loading: false,
    error: false,
    errors: null,
    success: false,
  },
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = false;
      state.errors = null;
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
      state.errors = null;
      return state;
    },
    [registerAccount.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errors = payload.errors || payload;
      state.success = false;
      return state;
    },
  },
});

export const { clearState } = registerSlice.actions;

export const registerSelector = (state) => state.register;
