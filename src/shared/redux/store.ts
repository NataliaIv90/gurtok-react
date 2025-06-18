// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { jamendoApi } from './jamendoApi';

// export const store = configureStore({
//   reducer: {
//     [jamendoApi.reducerPath]: jamendoApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(jamendoApi.middleware),
// });

// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { jamendoApi } from './jamendoApi';
import { useMemo } from 'react';

// Функція для створення нового стора
export const makeStore = () =>
  configureStore({
    reducer: {
      [jamendoApi.reducerPath]: jamendoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jamendoApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Глобальна змінна для клієнта
let store: AppStore;

// Функція для ініціалізації стора
export const initializeStore = (preloadedState?: Partial<RootState>) => {
  let _store = store ?? makeStore();

  if (preloadedState) {
    _store = makeStore();
  }

  // Якщо SSR — завжди новий store
  if (typeof window === 'undefined') return _store;
  // Якщо CSR — мемоізуємо store один раз
  if (!store) store = _store;

  return _store;
};

// Хук для використання стора в App Router
export const useStore = (initialState?: Partial<RootState>) =>
  useMemo(() => initializeStore(initialState), [initialState]);
