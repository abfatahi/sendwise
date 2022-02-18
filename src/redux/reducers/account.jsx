import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from '../actions/account';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    loading: false,
    error: false,
    success: false,
    transactions: [],
    showBalance: false,
    showTransferModal: false,
  },
  reducers: {
    clearState: (state) => {
      state.accountName = '';
      return state;
    },
    toggleShowBalance: (state) => {
      state.showBalance = !state.showBalance;
      return state;
    },
    toggleShowTranferModal: (state) => {
      state.showTransferModal = !state.showTransferModal;
      return state;
    },
  },
  extraReducers: {
    [getTransactions.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.transactions = payload.Transactions;
      return state;
    },
    [getTransactions.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      return state;
    },
  },
});

export const { clearState, toggleShowBalance, toggleShowTranferModal } =
  accountSlice.actions;

export const accountSelector = (state) => state.account;
