import { MainTemplate } from "components";
import { AccountPage, DetailsBookPage, HomePage, ShopBagPage } from "pages";
import { FavoritesPage } from "pages/FavoritesPage/FavoritesPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.SHOP_BAG} element={<ShopBagPage />} />
      <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      <Route path={ROUTE.BOOK_DETAILS} element={<DetailsBookPage />} />
    </Route>,
  ),
);
