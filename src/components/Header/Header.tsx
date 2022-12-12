import { LogoIcons, StyledHeader } from "./styles";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoIcons />
      <HeaderForm />
      <Navbar />
    </StyledHeader>
  );
};