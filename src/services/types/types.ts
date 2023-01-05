interface INewBookApi {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

interface INewBooksApi {
  books: INewBookApi[];
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

interface NewBooksResponse {
  error: string| null;
  total: string| null;
  books: INewBookApi[];
}
interface ISearchBooksApi extends NewBooksResponse {
  page: string|null;
}

interface IBookDetailsApi {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: IFormatBook;
  language: string;
}
interface IFormatBook {
  [format: string]: string;
}

interface ISearchResult {
  searchValue: string;
  page: string;
}
export type {
  INewBookApi,
  INewBooksApi,
  ISearchBooksApi,
  IBookDetailsApi,
  IFormatBook,
  NewBooksResponse,
  ISearchResult,
};
