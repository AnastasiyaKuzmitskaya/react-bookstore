import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookstoreAPI, ISearchBooksApi } from "services";

type SearchState = {
  searchValue: string | null;
  searchResponse: ISearchBooksApi;
  error: string | null;
  isLoading: boolean;
};
type SearchParams = {
  searchValue: string | null;
  page?: string | null;
};

const initialState: SearchState = {
  searchValue: null,
  searchResponse: {
    error: null,
    total: null,
    page: null,
    books: [],
  },
  error: null,
  isLoading: false,
};

export const fetchBooksBySearch = createAsyncThunk<
  ISearchBooksApi,
  SearchParams,
  { rejectValue: string }
>("search/fetchBooksBySearch", async (searchParams: SearchParams, { rejectWithValue }) => {
  try {
    return await bookstoreAPI.getBookBySearch(searchParams.searchValue, searchParams.page);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    removeSearchState: (state) => {
      state.searchValue = null;
      state.isLoading = false;
      state.error = null;
      state.searchResponse.books = [];
      state.searchResponse.error = null;
      state.searchResponse.page = null;
      state.searchResponse.total = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.searchResponse.books = payload.books;
      state.searchResponse.error = payload.page;
      state.searchResponse.page = payload.page;
      state.searchResponse.total = payload.total;
    });
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;

export const { setSearchValue, removeSearchState } = searchSlice.actions;
