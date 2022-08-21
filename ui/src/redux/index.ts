import { configureStore } from '@reduxjs/toolkit';
import shortUrlReducer from './slices/shortUrl';
import validateUrlReducer from './slices/validateUrl';

//create store
export const store = configureStore({
  reducer: {
    shortUrlReducer,
    validateUrlReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
