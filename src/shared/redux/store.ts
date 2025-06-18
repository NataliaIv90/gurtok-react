// src/shared/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { jamendoApi } from './jamendoApi';

export const store = configureStore({
  reducer: {
    [jamendoApi.reducerPath]: jamendoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jamendoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
