import { featchNewBooks } from "./slices/newBooksSlice";
import { AppDispatch, RootState } from "./store";
import { getBooks } from "./selectors/bookSelectors";
import { useAppDispatch, useAppSelector } from "./redux-hooks/redux-hooks";
import { store } from "./store";
import { fetchBookDetails } from "./slices/bookDetailsSlice";
import { getFavoritesBooks } from "./selectors/favoritesSelector";
import { removeFavorite, addFavorites } from "./slices/favoritesSlise";
import { persistor } from "./store";

export type { AppDispatch, RootState };
export {
  featchNewBooks,
  getBooks,
  useAppDispatch,
  useAppSelector,
  store,
  fetchBookDetails,
  getFavoritesBooks,
  addFavorites,
  removeFavorite,
  persistor,
};
