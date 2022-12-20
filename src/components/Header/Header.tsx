import { LogoIcons, StyledHeader } from "./styles";
import { HeaderForm, Navbar } from "components";
import { TogglerTheme } from "components";


export const Header = () => {
  return (
    <StyledHeader>
      <LogoIcons />
      <HeaderForm />
      <Navbar />
      <TogglerTheme type="checkbox"/>
    </StyledHeader>
  );
};