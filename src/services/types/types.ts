export interface INewBookApi {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
  }

  export interface INewBooksApi {
    books: INewBookApi[];
    error: string;
    total: string;
  }

  export interface ISearchBooksApi extends INewBooksApi {
    page: string;
  }

  export interface IBookDetailsApi {
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
    pdf: { [key: string]: string };
  }