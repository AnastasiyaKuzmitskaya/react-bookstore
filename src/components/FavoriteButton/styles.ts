import styled from "styled-components";
import { Color } from "ui";
import { FavoritesIcon } from "assets";

const StyledFavoriteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  padding: 16px;
  background: ${Color.Primary};
  border: none;
  cursor: pointer;
`;

const Heart = styled(FavoritesIcon)`
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  :hover,
  :active {
    fill: ${Color.Red};
  }
`;

export { StyledFavoriteButton, Heart };
