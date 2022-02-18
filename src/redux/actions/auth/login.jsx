import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../../utils/api';

export const loginAccount = createAsyncThunk(
  'login/account',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${baseURL}user/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let data = await response.json();
      if (data.status === 'success') {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', JSON.stringify(data.data));
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
