import { Link } from "react-router-dom";
import { FavoritesIcon, ShopBagIcon, UseAccountIcon } from "assets";
import { ROUTE } from "routes";
import { Amount, NavBarItem, NavBarList, StyledNavBar } from "./styles";
import { getFavoritesBooks, useAppSelector } from "store";

export const Navbar = () => {
  const { favoritesBook } = useAppSelector(getFavoritesBooks);

  return (
    <StyledNavBar>
      <NavBarList>
        <NavBarItem>
          <Link to={ROUTE.FAVORITES}>
            {favoritesBook.length > 0 && <Amount>{favoritesBook.length}</Amount>}
            <FavoritesIcon />
          </Link>
        </NavBarItem>
        <Link to={ROUTE.SHOP_BAG}>
          <ShopBagIcon />
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <UseAccountIcon />
        </Link>
      </NavBarList>
    </StyledNavBar>
  );
};
