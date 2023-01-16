import { Link } from "react-router-dom";
import { FavoritesIcon, ShopBagIcon, UseAccountIcon } from "assets";
import { ROUTE } from "routes";
import { Amount, NavBarItem, NavBarList, StyledNavBar } from "./styles";
import { getCart, getFavoritesBooks, getUser, useAppSelector } from "store";

export const Navbar = () => {
  const { favoritesBook } = useAppSelector(getFavoritesBooks);
  const { cartItems } = useAppSelector(getCart);
  const { isAuth } = useAppSelector(getUser);

  return (
    <StyledNavBar>
      <NavBarList>
        <NavBarItem>
          <Link to={ROUTE.FAVORITES}>
            {favoritesBook.length > 0 && isAuth ? <Amount>{favoritesBook.length}</Amount> : null}
            <FavoritesIcon />
          </Link>
        </NavBarItem>
        <NavBarItem>
          <Link to={ROUTE.SHOP_BAG}>
            {cartItems.length > 0 && isAuth ? <Amount>{cartItems.length}</Amount> : null}
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
