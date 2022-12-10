import styled from "styled-components";
import { Color, Margin, Typography } from "../../ui";

export const StyledBookItem = styled.li`
  display: flex;
`;

export const BookImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 226px;
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

export const BookPrice = styled.p`
  display: flex;
`;
