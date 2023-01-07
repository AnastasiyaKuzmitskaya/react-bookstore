import styled from "styled-components";
import { Media } from "ui";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const NavBarList = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
  ${Media.LG}{
    width: 136px;
  }
`;