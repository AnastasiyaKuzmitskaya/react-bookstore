import { useEffect, useState } from "react";
import { Book } from "./components";
import { Header } from "./components";
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
      <Header />
      <Book />

      <button onClick={handlTheme}>DFDRRG</button>
    </AppWrapper>

    
  );
};
