import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

export const StyledTabBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${Margin.SuperLarge};
  ${Media.MD} {
    margin-bottom: ${Margin.SuperLargeMobile};
  }
`;

export const TabItem = styled.button<{ isActive?: boolean }>`
  ${Typography.S1}
  color: ${Color.Primery_Text};
  margin-bottom: ${Margin.SuperLarge};
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.4s;
  border-bottom: ${({ isActive }) => isActive && `1px solid ${Color.Red}`};

  :hover {
    color: ${Color.Primary};
    scale: 1.1;
  }
  &:focus {
    color: ${Color.Primary};
  }
  ${Media.MD} {
    margin-bottom: ${Margin.SuperLargeMobile};
  }
`;

export const Container = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(3, 160px);

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 100px);
    column-gap: 10px;
  }
`;
export const TabDescription = styled.p`
  padding-left: 10px;
  ${Typography.S1}
  font-weight: 400;
  text-overflow: clip;
  overflow: hidden;
`;
export const ContainerDescription = styled.div`
  height: auto;
  @media (max-width: 576px) {
    height: auto;
  }
`;
