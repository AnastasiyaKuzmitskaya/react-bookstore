import axios from "axios";
import { IBookDetailsApi, INewBooksApi, ISearchBooksApi } from "./types/types";

class restBookStoreApi {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks(): Promise<INewBooksApi> {
    const { data } = await this.API.get<INewBooksApi>("/new");

    return data;
  }

  public async getBooksBySearch(title: string, page: string): Promise<ISearchBooksApi> {
    const { data } = await this.API.get<ISearchBooksApi>(`/search/${title}/${page}`);
    return data;
  }

  public async getBookDetails(isbn: string): Promise<IBookDetailsApi> {
    const { data } = await this.API.get<IBookDetailsApi>(`/books/${isbn}`);
    return data;
  }
}

export const bookstoreAPI = new restBookStoreApi();
