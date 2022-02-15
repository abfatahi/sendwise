import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, paystackTestSecretKey } from '../../utils/api';

export const validateAccount = createAsyncThunk(
  'validate/account',
  async ({ bank_code, account_number }, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseURL}bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + paystackTestSecretKey,
          },
        }
      );
      await new Promise((res) => setTimeout(res, 1000));
      let data = await response.json();
      if (data.status === true) {
        return data.data;
      } else if (data.status !== true || undefined) {
        return thunkAPI.rejectWithValue([data]);
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
