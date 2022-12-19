import styled from "styled-components";
import { Logo } from "assets";
import { Color, Margin, Media } from "ui";

export const StyledHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${Margin.SuperLarge};
  margin-top: ${Margin.Medium};
  border-bottom: 2px solid ${Color.Gray};
`;

export const LogoIcons = styled(Logo)`
  cursor: pointer;

  :hover path {
    fill: ${Color.Secondary};
    transition: 0.3s ease;
  }
  :active path {
    fill: ${Color.Primary};
    transition: 0.3s ease;
  }

  ${Media.SM} {
    width: 122px;
    height: 25px;
  }
`;
