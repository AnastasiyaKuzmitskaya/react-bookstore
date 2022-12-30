import { StyledHeader } from "./styles";
import { Navbar, Search } from "components";
import { TogglerTheme } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { Breakpoint } from "ui";
import { useWindowSize } from "hooks";
import { LogoIcon  } from "assets";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <LogoIcon  width={width < Breakpoint.MD ? "122" : "137"} />
      </Link>
      <Search />
      <Navbar />
      <TogglerTheme />
    </StyledHeader>
  );
};
