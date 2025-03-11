// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/counterSlice';
import asyncCounterReducer from '@/store/counterSliceAsync';
import userReducer from '@/store/user';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    asyncCounter: asyncCounterReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;