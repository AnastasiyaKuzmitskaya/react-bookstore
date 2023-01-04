import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetailsApi } from "services";

interface IFavoritesState {
  favoritesBook: IBookDetailsApi[];
}

const initialState: IFavoritesState = {
  favoritesBook: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites(state, { payload }: PayloadAction<IBookDetailsApi>) {
      const result = state.favoritesBook.find((book) => book.isbn13 === payload.isbn13);
      if (!result) state.favoritesBook.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      state.favoritesBook = state.favoritesBook.filter((item) => item.isbn13 !== payload);
    },
  },
});

export const { addFavorites, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
