import { RootState } from "../store";

export const getBooks = (state: RootState) => state.books;
export const getBooksError = (state: RootState) => state.books.error;