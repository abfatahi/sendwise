import { createSlice } from '@reduxjs/toolkit';
import { loginAccount } from '../../actions/auth/login';

export const loginSlice = createSlice({
  name: 'login',
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
    [loginAccount.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [loginAccount.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      return state;
    },
    [loginAccount.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      return state;
    },
  },
});

export const { clearState } = loginSlice.actions;

export const loginSelector = (state) => state.login;
