import { Footer } from "components";
import { Header } from "components";
import { Outlet } from "react-router-dom";
import { Container, StyledAPP } from "./style";

export const MainTemplate = () => {
  return (
    <StyledAPP>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </StyledAPP>
  );
};
