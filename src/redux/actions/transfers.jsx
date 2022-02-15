import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, paystackTestSecretKey } from '../../utils/api';

export const transferFunds = createAsyncThunk(
  'transfer/funds',
  async (
    { name, account_number, bank_code, amount, reason, bank_name },
    thunkAPI
  ) => {
    const newTransfer = {
      id: 25142134 + +new Date(),
      name,
      account_number,
      bank_name,
      bank_code,
      amount,
      reason,
      status: 'rejected',
      createdAt: new Date(),
    };
    try {
      const response = await fetch(`${baseURL}/transferrecipient`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + paystackTestSecretKey,
        },
        body: JSON.stringify({
          name,
          account_number,
          bank_code,
        }),
      });

      let result = await response.json();
      if (result.status === 'success') {
        const recipients = result.data.recipient_code;
        const transfer = await fetch(`${baseURL}/transfer`, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + paystackTestSecretKey,
          },
          body: JSON.stringify({
            recipients,
            amount,
            reason,
          }),
        });
        let data = await transfer.json();
        if (data.status === 'success') {
          return newTransfer;
        } else {
          await new Promise((res) => setTimeout(res, 3000));
          return thunkAPI.rejectWithValue(newTransfer);
        }
      } else {
        await new Promise((res) => setTimeout(res, 3000));
        return thunkAPI.rejectWithValue(newTransfer);
      }
      //   if (data.status === true) {
      //     return data.data;
      //   } else if (data.status !== true || undefined) {
      //     return thunkAPI.rejectWithValue([data]);
      //   }
    } catch (err) {
      await new Promise((res) => setTimeout(res, 3000));
      return thunkAPI.rejectWithValue(newTransfer);
    }
  }
);
