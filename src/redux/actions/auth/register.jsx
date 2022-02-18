import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../../utils/api';

export const registerAccount = createAsyncThunk(
  'register/account',
  async ({ fullName, email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${baseURL}user/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          fullName,
        }),
      });
      let data = await response.json();
      if (data.status === 'success') {
        return data;
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
