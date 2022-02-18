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
        const response = await fetch(`${baseURL}user/details`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        let result = await response.json();
        if (result.status === 'success') {
          sessionStorage.setItem('user', JSON.stringify(result.data));
          return data;
        } else {
          return thunkAPI.rejectWithValue(data);
        }
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
