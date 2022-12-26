import { LogoIcons, StyledHeader } from "./styles";
import { Navbar } from "components";
import { TogglerTheme } from "components";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoIcons />
      <Navbar />
      <TogglerTheme type="checkbox" />
    </StyledHeader>
  );
};
