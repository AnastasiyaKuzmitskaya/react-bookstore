import { IBookDetailsApi, INewBookApi } from "services";

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
