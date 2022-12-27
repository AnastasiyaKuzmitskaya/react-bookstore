import { LogoIcons, StyledHeader } from "./styles";
import { Navbar } from "components";
import { TogglerTheme } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <LogoIcons />
      </Link>
      <Navbar />
      <TogglerTheme type="checkbox" />
    </StyledHeader>
  );
};
