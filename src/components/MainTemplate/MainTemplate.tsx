import { Footer } from "components";
import { Header } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectTheme } from "store/selectors/theme-selector";
import { Container, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <StyledMainTemplate>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </StyledMainTemplate>
  );
};
