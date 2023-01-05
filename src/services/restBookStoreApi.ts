import axios from "axios";
import { IBookDetailsApi, INewBooksApi, ISearchBooksApi } from "services";

class restBookStoreApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOK_API;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get<INewBooksApi>("new");
    return data;
  }

  public async getBookBySearch(
    query: string | null,
    page: string | null = "1",
  ): Promise<ISearchBooksApi> {
    const { data } = await this.API.get<ISearchBooksApi>(`search/${query}/${page}`);
    return data;
  }

  public async getBookDetails(isbn: string): Promise<IBookDetailsApi> {
    const { data } = await this.API.get<IBookDetailsApi>(`books/${isbn}`);
    return data;
  }
}

export const bookstoreAPI = new restBookStoreApi();
