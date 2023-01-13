import { Link } from "react-router-dom";
import { FavoritesIcon, ShopBagIcon, UseAccountIcon } from "assets";
import { ROUTE } from "routes";
import { Amount, NavBarItem, NavBarList, StyledNavBar } from "./styles";
import { getCart, getFavoritesBooks, useAppSelector } from "store";

export const Navbar = () => {
  const { favoritesBook } = useAppSelector(getFavoritesBooks);
  const { cartItems } = useAppSelector(getCart);
  return (
    <StyledNavBar>
      <NavBarList>
        <NavBarItem>
          <Link to={ROUTE.FAVORITES}>
            {favoritesBook.length > 0 && <Amount>{favoritesBook.length}</Amount>}
            <FavoritesIcon />
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={ROUTE.SHOP_BAG}>
            {cartItems.length > 0 && <Amount>{cartItems.length}</Amount>}
            <ShopBagIcon />
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={ROUTE.ACCOUNT}>
            <UseAccountIcon />
          </Link>
        </NavBarItem>
      </NavBarList>
    </StyledNavBar>
  );
};
