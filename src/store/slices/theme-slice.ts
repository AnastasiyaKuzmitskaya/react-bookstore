import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "types";

const themeSlice = createSlice({
  name: "togglerTheme",
  initialState: "light" as Theme,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => action.payload,
  },
});
export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
