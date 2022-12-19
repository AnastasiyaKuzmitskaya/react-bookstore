import { LogoIcons, StyledHeader } from "./styles";
import { HeaderForm, Navbar } from "components";


export const Header = () => {
  return (
    <StyledHeader>
      <LogoIcons />
      <HeaderForm />
      <Navbar />
    </StyledHeader>
  );
};