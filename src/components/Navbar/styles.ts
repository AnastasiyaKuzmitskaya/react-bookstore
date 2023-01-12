import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const NavBarList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
  ${Media.LG} {
    width: 136px;
  }
`;

export const NavBarItem = styled.li`
  position: relative;
`;

export const Amount = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 17px;
  height: 17px;
  text-align: center;
  color: white;
  background: ${Color.Red};
  border-radius: 50%;
`;
