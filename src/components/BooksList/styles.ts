import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

export const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  column-gap: ${Margin.ExtraMedium};
  row-gap: ${Margin.SuperLarge};
  padding-bottom: ${Margin.ExtraLarge};
  margin-bottom: ${Margin.SuperLarge};
  border-bottom: 1px solid ${Color.Gray};

  ${Media.LG} {
    grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  }
  ${Media.MD} {
    grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
    padding-bottom: ${Margin.ExtraLargeMobile};
    margin-bottom: ${Margin.SuperLargeMobile};
  }
`;

export const ErrorMassage = styled.h2`
  ${Typography.H3};
  margin-top: 75px;
`;
