import { createSlice } from '@reduxjs/toolkit';
import { loginAccount } from '../../actions/auth/login';

export const loginSlice = createSlice({
  name: 'login',
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
    [loginAccount.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [loginAccount.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.errors = null;
      return state;
    },
    [loginAccount.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errors = payload.errors;
      state.success = false;
      return state;
    },
  },
});

export const { clearState } = loginSlice.actions;

export const loginSelector = (state) => state.login;
