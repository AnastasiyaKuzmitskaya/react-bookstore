import { Book, Header } from "components";
import { RouterProvider } from "react-router-dom";
import { router } from "router/router";
import { AppWrapper } from "ui";

export const App = () => {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
      <Header />
      <Book />
    </AppWrapper>
  );
};
