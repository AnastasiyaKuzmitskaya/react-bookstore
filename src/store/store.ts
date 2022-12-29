import { configureStore } from "@reduxjs/toolkit";
import { newBooksReducer } from "./slices/newBooksSlice";
import { themeReducer } from "./slices/theme-slice";

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    togglerTheme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
