import styled from "styled-components";
import { LogoIcon } from "assets";
import { Color, Margin } from "ui";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${Margin.Medium};
  margin: ${Margin.Medium} 0 ${Margin.ExtraLarge} 0;
  border-bottom: 2px solid ${Color.Gray};
`;

export const LogoWrapper = styled(Link)`
  position: relative;
  z-index: 11;
  display: block;
  svg {
    path {
      fill: ${Color.Primery_Text};
    }
  }
`;

export const Logo = styled(LogoIcon)`
  background: none;
  border: none;
  cursor: pointer;
  :hover path {
    fill: ${Color.Secondary};
    transition: 0.3s ease;
  }
  :active path {
    fill: ${Color.Primary};
    transition: 0.3s ease;
  }
`;
