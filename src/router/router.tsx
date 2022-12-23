import { DetailsBookPage, HomePage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/details_book" element={<DetailsBookPage />} />
    </Route>,
  ),
);
