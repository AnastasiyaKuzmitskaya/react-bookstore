import { MainTemplate } from "components";
import {
  AccountPage,
  DetailsBookPage,
  HomePage,
  NotFoundPage,
  RegisterPage,
  ResetPasswordPage,
  SearchPage,
  ShopBagPage,
  SignInPage,
  SignUpPage,
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

      {/*       RequareAuth */}
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.SHOP_BAG} element={<ShopBagPage />} />
      <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />

      <Route path={ROUTE.ACCOUNT} element={<RegisterPage />} />
      <Route path={ROUTE.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTE.SIGNUP} element={<SignUpPage />} />

      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
    </Route>,
  ),
);
