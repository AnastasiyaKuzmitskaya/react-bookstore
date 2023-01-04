import { fetchNewBooks } from "./features/newBooksSlice";
import { AppDispatch, RootState } from "./store";
import { getBooks } from "./selectors/bookSelectors";
import { useAppDispatch, useAppSelector } from "./redux-hooks/redux-hooks";
import { store } from "./store";
import { fetchBookDetails } from "./features/bookDetailsSlice";
import { getFavoritesBooks } from "./selectors/favoritesSelector";
import { removeFavorite, addFavorites } from "./features/favoritesSlise";
import { persistor } from "./store";

export type { AppDispatch, RootState };
export {
  fetchNewBooks,
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
