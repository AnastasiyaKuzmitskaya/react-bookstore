import { Link } from "react-router-dom";
import { Favorites, ShopBag, UseAccount } from "assets";
import { ROUTE } from "routes";
import { StyledNavBar } from "./styles";


export const Navbar = () => {
  return (
    <StyledNavBar>
      <Link to={ROUTE.FAVORITES}>
        <Favorites />
      </Link>
      <Link to={ROUTE.SHOP_BAG}>
        <ShopBag />
      </Link>
      <Link to={ROUTE.ACCOUNT}>
        <UseAccount />
      </Link>
    </StyledNavBar>
  );
};
