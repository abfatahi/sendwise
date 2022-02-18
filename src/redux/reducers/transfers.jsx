import { createSlice } from '@reduxjs/toolkit';
import { transferFunds } from '../actions/transfers';

export const transferSlice = createSlice({
  name: 'transfer',

  initialState: {
    loading: false,
    error: false,
    errors: [],
    success: false,
    activeTab: 'saved',
  },

  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = false;
      state.errors = [];
      state.success = false;
      return state;
    },
    toggleActiveTab: (state, { payload }) => {
      state.activeTab = payload;
      return state;
    },
  },

  extraReducers: {
    [transferFunds.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [transferFunds.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
      state.errors = [];
      state.success = true;
      return state;
    },
    [transferFunds.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errors = payload.errors || payload;
      state.success = false;
      return state;
    },
  },
});

export const { clearState, toggleActiveTab } = transferSlice.actions;

export const transferSelector = (state) => state.transfer;
