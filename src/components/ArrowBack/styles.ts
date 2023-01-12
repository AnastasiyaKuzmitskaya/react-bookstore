import { ArrowBackIcon } from "assets";
import styled from "styled-components";
import { Margin, Media } from "ui";

export const ButtonArrow = styled.button`
  text-align: start;
  width: 50px;
  margin-bottom: ${Margin.ExtraMedium};
  background: none;
  border: none;
  cursor: pointer;

  ${Media.MD} {
    margin-bottom: ${Margin.Medium};
  }
`;

export const StyledArrowIcon = styled(ArrowBackIcon)`
  background: none;
  border: none;
`;
