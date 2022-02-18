import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../utils/api';

export const getTransactions = createAsyncThunk(
  'transactions/all',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${baseURL}user/transactions/all`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      });
      await new Promise((res) => setTimeout(res, 1000));
      let data = await response.json();
      if (data.status === 'success') {
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish internet connection.',
        },
      ]);
    }
  }
);
