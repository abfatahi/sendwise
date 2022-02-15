import { createSlice } from '@reduxjs/toolkit';
import { transferFunds } from '../actions/transfers';

export const transferSlice = createSlice({
  name: 'transfer',

  initialState: {
    transfers: [],
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
    [transferFunds.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [transferFunds.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.transfers.push(payload);
      return state;
    },
    [transferFunds.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.transfers.push(payload);
      return state;
    },
  },
});

export const { clearState } = transferSlice.actions;

export const transferSelector = (state) => state.transfer;
