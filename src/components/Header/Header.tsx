import { Logo, LogoWrapper, StyledHeader } from "./styles";
import { Navbar, Search } from "components";
import { TogglerTheme } from "components";
import { ROUTE } from "routes";
import { Breakpoint } from "ui";
import { useWindowSize } from "hooks";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader>
      <LogoWrapper to={ROUTE.HOME}>
        <Logo width={width < Breakpoint.MD ? "122" : "137"} />
      </LogoWrapper>
      <Search />
      <Navbar />
      <TogglerTheme />
    </StyledHeader>
  );
};
