import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookstoreAPI } from "../../services";
import { IBookDetailsApi, INewBooksApi } from "../../services";
import { IBooksNewState } from "../../types";

const initialState: IBooksNewState = {
  total: "0",
  books: [],
  error: null,
  result: {
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: "",
    pdf: {},
  },
};
export const featchBook = createAsyncThunk<INewBooksApi>("book/featchBook", async () => {
  const newBooks = await bookstoreAPI.getNewBooks();
  return newBooks;
});

export const featchBookDetails = createAsyncThunk<IBookDetailsApi, string>(
  "books/featchBookDetails",
  async (id) => {
    const bookDetails = await bookstoreAPI.getBookDetails(id);
    return bookDetails;
  },
);

export const featchBooksBySearch = createAsyncThunk<any, any>(
  "books/featchBooksBySearch",
  async ({ title, page }) => {
    const bookRezultSearch = await bookstoreAPI.getBooksBySearch(title, page);
    return bookRezultSearch;
  },
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(featchBook.pending, (state) => {
      state.error = null;
    });
    builder.addCase(featchBook.fulfilled, (state, action) => {
      state.books = action.payload.books;
    });
    builder.addCase(featchBook.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(featchBookDetails.pending, (state) => {
      state.error = null;
    });
    builder.addCase(featchBookDetails.fulfilled, (state, action) => {
      state.result = action.payload;
    });
    builder.addCase(featchBookDetails.rejected, (state) => {
      state.error = null;
    });
    builder.addCase(featchBooksBySearch.pending, (state) => {
      state.error = null;
    });
    builder.addCase(featchBooksBySearch.fulfilled, (state, action) => {
      state.total = action.payload.total;
      state.books = action.payload.books;
    });
    builder.addCase(featchBookDetails.rejected, (state) => {
      state.error = null;
    });
  },
});

export default bookSlice.reducer;
