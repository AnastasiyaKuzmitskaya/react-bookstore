import styled from "styled-components";
import { LogoIcon } from "assets";
import { Color, Margin, Media } from "ui";

export const StyledHeader = styled.div`
  position:relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${Margin.SuperLarge};
  margin-top: ${Margin.Medium};
  border-bottom: 2px solid ${Color.Gray};
`;

export const LogoIcons = styled(LogoIcon)`
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
