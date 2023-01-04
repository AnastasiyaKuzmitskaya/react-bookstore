import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookDetailsReduser from "./features/bookDetailsSlice";
import newBooksReducer from "./features/newBooksSlice";
import { themeReducer } from "./features/theme-slice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesReduser from "./features/favoritesSlise";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["newBooks", "bookDetails"],
};

const rootReducer = combineReducers({
  newBooks: newBooksReducer,
  togglerTheme: themeReducer,
  bookDetails: bookDetailsReduser,
  favorites: favoritesReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
