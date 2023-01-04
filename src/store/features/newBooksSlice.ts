import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookstoreAPI, INewBookApi } from "services";
import { INewBooks } from "types";

const initialState: INewBooks = {
  books: [],
  error: null,
  isLoading: false,
};

export const fetchNewBooks = createAsyncThunk<INewBookApi[]>(
  "newBooks/fetchNewBooks",
  async () => {
    return (await bookstoreAPI.getNewBooks()).books;
  },
);

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.books = action.payload;
      }
    });

    builder.addCase(fetchNewBooks.rejected, (state, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
      state.books = action.payload;
    });
  },
});


export default newBooksSlice.reducer;