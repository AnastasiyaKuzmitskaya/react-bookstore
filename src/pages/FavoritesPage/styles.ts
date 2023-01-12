import styled from "styled-components";
import { Margin, Media, Typography } from "ui";

export const StyledFavoritesPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

`;
export const FavoritesBookList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  width: 100%;
  margin-top: 24px;
  margin-bottom: 48px;

  ${Media.MD} {
    gap: 32px;
    margin-top: 0;
  }
`;

export const NothingFavorite = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Typography.H1};
  margin:  ${Margin.ExtraLarge} 0;
`;
