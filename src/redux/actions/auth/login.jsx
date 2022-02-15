import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginAccount = createAsyncThunk(
  'login/account',
  async ({ email, password }, thunkAPI) => {
    try {
      await new Promise((res) => setTimeout(res, 3000));
      const registerdUser = JSON.parse(localStorage.getItem('user'));
      const { email: userEmail, password: userPassword } = registerdUser;
      if (email !== userEmail || password !== userPassword)
        return thunkAPI.rejectWithValue({
          message: 'Invalid Login Details!',
        });

      if (email === userEmail && password === userPassword) {
        localStorage.setItem('token', +new Date());
        localStorage.setItem('tab', 'Dashboard');
        return true;
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
