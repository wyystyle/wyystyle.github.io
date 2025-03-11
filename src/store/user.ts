// src/features/counterSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const fn = ():Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userName: 'wyy', userCode: '123456' });
    }, 2000);
  });
}

// 异步获取数据
export const getUserInfo = createAsyncThunk('user/userInfo', async () => {
  const response = await fn();
  return response;
});

const user = createSlice({
  name: 'asyncCounter',
  initialState: { userName: '', userCode: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, () => {
        // state.status = 'loading';
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userCode = action.payload.userCode;
        state.userName = action.payload.userName;
      })
      .addCase(getUserInfo.rejected, () => {
        // state.status = 'failed';
      });
  },
});

export default user.reducer;