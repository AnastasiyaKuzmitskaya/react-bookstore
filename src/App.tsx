import React, { useEffect, useState } from "react";
import { BookList } from "./components/BookList";
import { Header } from "./components/Header";
import { AppWrapper } from "./ui";

type Theme = "light" | "dark";

export const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handlTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <AppWrapper>
      <Header/>
      
      APP
      <BookList books={[]} />
      {/*  <Header />
      <BooksList />
      <Subscribe />
      <Footer /> */}
      <button onClick={handlTheme}>DFDRRG</button>
    </AppWrapper>
  );
};
