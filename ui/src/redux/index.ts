import { configureStore } from "@reduxjs/toolkit";
import shortUrlReducer from "./slices/shortUrl";

//create store
export const store = configureStore({
  reducer: {
    shortUrlReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
