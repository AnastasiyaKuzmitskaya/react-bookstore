import { CloseIcon } from "assets";
import styled from "styled-components";
import { Color, Margin, Typography } from "ui";

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
  margin: 0 auto;
  z-index: 3;

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    width: 375px;
    padding-top: 23px;
    text-align: center;
    color: ${Color.Primary};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.4s ease-in-out;
    background-color: ${Color.Green};
  }
`;

export const CloseBurgerIcon = styled(CloseIcon)`
  fill: ${Color.Green};
`;

export const NavBurgerList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Margin.SuperLarge};
  margin: 0 auto;
  max-width: 287px;
  background: transparent;
`;
export const Title = styled.h4`
  ${Typography.B1}
  background: transparent;

  text-transform: uppercase;
  color: ${Color.Primery_Text};

  :hover {
    color: goldenrod;
    transition: all 0.4s;
  }
`;
