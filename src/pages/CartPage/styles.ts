import styled from "styled-components";
import { Margin, Media, Typography } from "ui";

export const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;
  ${Media.MD} {
    gap: 46px;
  }
`;

export const NothingCartShop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Typography.H1};
  margin: ${Margin.ExtraLarge} 0;
`;
