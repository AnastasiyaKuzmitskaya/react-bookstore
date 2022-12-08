import { LogoIcons, StyledHeader } from "./styles";
import { HeaderForm } from "../HeaderForm";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoIcons />
      <HeaderForm />
      <Navbar />
    </StyledHeader>
  );
};
