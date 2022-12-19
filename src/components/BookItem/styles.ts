import styled from "styled-components";
import { Color, Margin, Typography } from "ui";

export const StyledBookItem = styled.li`
  max-width: 352px;

  margin: 0 auto;
`;

export const BookImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 226px;
  width: 100%;
  background-color: ${Color.Blue};
`;

export const BookTitle = styled.h3`
  ${Typography.H3};
  ${Margin.ExtraSmall};
`;

export const BookSubtitle = styled.p`
  ${Typography.S1};
  ${Color.Secondary};
  ${Margin.Large};
`;

export const BookPrice = styled.p``;
