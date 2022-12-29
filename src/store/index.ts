import { featchNewBooks } from "./slices/newBooksSlice";
import { AppDispatch, RootState } from "./store";
import { getBooks } from "./selectors/bookSelectors";
import { useAppDispatch, useAppSelector } from "./redux-hooks/redux-hooks";
import { store } from "./store";


export type { AppDispatch, RootState };
export {
  featchNewBooks,
  getBooks,
  useAppDispatch,
  useAppSelector,
  store,
  
};
