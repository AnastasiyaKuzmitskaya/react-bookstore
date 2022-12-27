import { useEffect, useState } from "react";
import { StyledToggler } from "./styles";

interface IProps {
  type: string;
}

export const TogglerTheme = ({ type }: IProps) => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return <StyledToggler type={type} onClick={handleTheme} />;
};
