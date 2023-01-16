import { CloseIcon } from "assets";
import styled from "styled-components";
import { Color, Typography } from "ui";

interface IProps {
  open?: boolean;
  close?: boolean;
}

export const Background = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  height: 100vh;
  background-color: ${Color.Primary};
  opacity: 0.4;
`;

export const StyledMenuDetailed = styled.div<IProps>`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 250px;
  padding: 20px 12px 0 12px;
  text-align: center;
  background: ${Color.Purple};
  color: ${Color.Primary};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.5s ease-in-out;
`;

export const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
export const CloseBurgerIcon = styled(CloseIcon)`
  cursor: pointer;
  transition: all 0.4s;
  fill: ${Color.Primary};
  :hover path {
    fill: ${Color.Secondary};
    transition: 0.3s ease;
  }

  :active path {
    fill: ${Color.Primary};
    transition: 0.3s ease;
  }
`;

export const NavBurgerList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  background: transparent;
`;
export const Title = styled.h4`
  ${Typography.B1}
  margin-bottom: 20px;
  background: transparent;
  text-transform: uppercase;
  color: ${Color.Primery_Text};
  :hover {
    transition: all 0.4s;
  }
`;

export const Button = styled.button`
  padding: 6px 34px;
  ${Typography.B1}
  color: ${Color.White};
  margin-bottom: 20px;
  border: none;
  background-color: ${Color.Primery_Text};
  cursor: pointer;
`;
