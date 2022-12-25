import { LogoIcons, StyledHeader } from "./styles";
import { Navbar } from "components";
import { TogglerTheme } from "components";
import { ROUTE } from "router";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      {/* <Link to={ROUTE.HOME}> */}
        <LogoIcons />
{/*       </Link> */}
      <Navbar />
      <TogglerTheme type="checkbox" />
    </StyledHeader>
  );
};
