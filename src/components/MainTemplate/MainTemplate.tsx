import { Footer } from "components";
import { Header } from "components";
import { Outlet } from "react-router-dom";
import { Container, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </StyledMainTemplate>
  );
};
