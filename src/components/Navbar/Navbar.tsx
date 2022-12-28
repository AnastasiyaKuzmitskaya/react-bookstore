import { Link } from "react-router-dom";
import { FavoritesIcon, ShopBagIcon, UseAccountIcon } from "assets";
import { ROUTE } from "routes";
import { StyledNavBar } from "./styles";


export const Navbar = () => {
  return (
    <StyledNavBar>
      <Link to={ROUTE.FAVORITES}>
        <FavoritesIcon />
      </Link>
      <Link to={ROUTE.SHOP_BAG}>
        <ShopBagIcon />
      </Link>
      <Link to={ROUTE.ACCOUNT}>
        <UseAccountIcon />
      </Link>
    </StyledNavBar>
  );
};
