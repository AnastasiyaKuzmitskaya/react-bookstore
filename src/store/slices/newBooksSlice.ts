import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookstoreAPI, INewBookApi } from "services";
import { INewBooks } from "types";

const initialState: INewBooks = {
  books: [],
  error: null,
  isLoading: false,
};

export const featchNewBooks = createAsyncThunk<INewBookApi[]>(
  "newBooks/featchNewBooks",
  async () => {
    return (await bookstoreAPI.getNewBooks()).books;
  },
);

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(featchNewBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(featchNewBooks.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.books = action.payload;
      }
    });

    builder.addCase(featchNewBooks.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
      state.books = action.payload;
    });
  },
});


export const newBooksReducer = newBooksSlice.reducer;
