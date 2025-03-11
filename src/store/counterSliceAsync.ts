// src/features/counterSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


interface CounterState {
  value: number;
  status: 'add' | 'down';
}
const fn = (params:CounterState):Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let num: number = params.value
      if(params.status === 'add'){
        num = num + 1
      }else{
        num = num - 1
      }
      resolve({ data: num });
    }, 3000);
  });
}

// 异步获取数据
export const fetchCount = createAsyncThunk('asyncCounter/fetchCount', async (params:CounterState) => {
  const response = await fn(params);
  return response.data;
});

const asyncCounterSlice = createSlice({
  name: 'asyncCounter',
  initialState: { asyncCount: 0, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.asyncCount = action.payload;
      })
      .addCase(fetchCount.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default asyncCounterSlice.reducer;