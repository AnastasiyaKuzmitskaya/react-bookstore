import { MainTemplate, RequareAuth } from "components";
import {
  AccountPage,
  CartPage,
  DetailsBookPage,
  HomePage,
  NotFoundPage,
  RegisterPage,
  ResetPasswordPage,
  SearchPage,
} from "pages";
import { FavoritesPage } from "pages/FavoritesPage/FavoritesPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />

      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.BOOK_DETAILS} element={<DetailsBookPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTE.REGISTRATION} element={<RegisterPage />} />
      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.SHOP_BAG} element={<CartPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      </Route>
    </Route>,
  ),
);
