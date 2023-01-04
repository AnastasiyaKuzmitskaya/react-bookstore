import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookstoreAPI, IBookDetailsApi } from "services";
import { IBookDetails } from "types";

const initialState: IBookDetails = {
  book: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  },
  error: null,
  isLoading: false,
};

export const fetchBookDetails = createAsyncThunk<IBookDetailsApi, string, { rejectValue: string }>(
  "bookDetails/fetchBookDetails",
  async (isbn: string, { rejectWithValue }) => {
    try {
      return await bookstoreAPI.getBookDetails(isbn);
      
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

export const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.book = payload;
    });

    builder.addCase(fetchBookDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default bookDetailsSlice.reducer;
