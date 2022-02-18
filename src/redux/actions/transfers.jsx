import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../utils/api';

export const transferFunds = createAsyncThunk(
  'transfer/funds',
  async (
    { sourceCurrency, targetCurrency, sender, receiver, amount },
    thunkAPI
  ) => {
    try {
      const response = await fetch(`${baseURL}transfer/new`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          sourceCurrency,
          targetCurrency,
          sender,
          receiver,
          amount,
        }),
      });

      let data = await response.json();
      if (data.status === 'success') {
        return data;
      } else {
        await new Promise((res) => setTimeout(res, 3000));
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish connection.',
        },
      ]);
    }
  }
);
