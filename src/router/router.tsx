import { MainTemplate } from "components";
import { DetailsBookPage, HomePage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.BOOK_DETAILS} element={<DetailsBookPage />} />
    </Route>,
  ),
);
