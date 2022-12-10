import { IBookDetailsApi } from "../services";

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface INewBooks{
books: IBook[];
error: string;
total: string;
}

export interface IBooksNewState {
  books: IBook[];
  error: any;
  total: string;
  result: IBookDetailsApi;
}
