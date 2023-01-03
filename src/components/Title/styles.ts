import styled from "styled-components";
import { Margin, Media, Typography } from "ui";

export const StyledTitle = styled.h1`
  margin-bottom: ${Margin.SuperLarge};
  ${Typography.H1};

  text-align: left;

  ${Media.SM} {
    margin-bottom: ${Margin.SuperLargeMobile};
  }
`;
