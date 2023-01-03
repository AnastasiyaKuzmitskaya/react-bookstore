import { FavoritesIcon } from "assets";
import styled from "styled-components";
import { Color } from "ui";

const StyledFavoriteButton = styled.button<{ $isFavorites: boolean }>`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  padding: 16px;
  background: ${({ $isFavorites }) => ($isFavorites ? "none" : Color.Primary)};
  border: none;
  cursor: pointer;
`;

const Heard = styled(FavoritesIcon)<{ $isFavorites: boolean }>`
  width: 24px;
  height: 24px;
  stroke: ${({ $isFavorites }) => ($isFavorites ?  Color.Red:Color.White)};
  fill: ${({ $isFavorites }) => ($isFavorites ? Color.White : Color.Red)};
  border: none;
  cursor: pointer;
  :hover,
  :active {
    fill: ${Color.Red};
  }
`;

export { StyledFavoriteButton, Heard };
