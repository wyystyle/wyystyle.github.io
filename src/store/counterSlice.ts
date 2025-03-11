// src/features/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 初始状态
const initialState = {
  count: 0,
};

// 创建 Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// 导出 Actions 和 Reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;