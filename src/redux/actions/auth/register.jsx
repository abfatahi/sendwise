import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerAccount = createAsyncThunk(
  'register/account',
  async ({ fullname, email, password }, thunkAPI) => {
    try {
      await new Promise((res) => setTimeout(res, 3000));
      localStorage.setItem(
        'user',
        JSON.stringify({ fullname, email, password })
      );
      return true;
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish internet connection.',
        },
      ]);
    }
  }
);
