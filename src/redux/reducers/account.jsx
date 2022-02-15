import { createSlice } from '@reduxjs/toolkit';
import { validateAccount } from '../actions/account';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    validateBankLoading: false,
    validateBankError: false,
    validateBankSuccess: false,
    accountName: '',
    bankName: '',
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
    [validateAccount.pending]: (state) => {
      state.validateBankLoading = true;
      return state;
    },
    [validateAccount.fulfilled]: (state, { payload }) => {
      state.validateBankLoading = false;
      state.validateBankError = false;
      state.validateBankSuccess = true;
      state.accountName = payload.account_name;
      state.accountName = payload.account_name;
      return state;
    },
    [validateAccount.rejected]: (state) => {
      state.validateBankLoading = false;
      state.validateBankError = true;
      state.validateBankSuccess = false;
      return state;
    },
  },
});

export const { clearState, toggleShowBalance, toggleShowTranferModal } =
  accountSlice.actions;

export const accountSelector = (state) => state.account;
