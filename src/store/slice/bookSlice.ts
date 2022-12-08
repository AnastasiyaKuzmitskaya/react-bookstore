import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookstoreAPI } from "../../services";
import { INewBooksApi } from "../../services/types/types";

export const bookSlice = createAsyncThunk<INewBooksApi>("book/bookSlice", async () => {
  const newBooks = await bookstoreAPI.getNewBooks();
  return newBooks;
});
