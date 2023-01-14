import { IBookCartAPI, IBookDetailsApi, INewBookApi } from "services";

export interface IBookDetails {
  book: IBookDetailsApi;
  error: null | string;
  isLoading: boolean;
}

export interface INewBooks {
  books: INewBookApi[];
  error: null | string;
  isLoading: boolean;
}

export type Theme = "dark" | "light";

export interface ICartStore {
  cartItems: IBookCartAPI[];
  total: number| null;
  isLoading: boolean;
  sum: number| null;
}