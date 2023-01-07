import { TogglerTheme } from "components";
import { useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledMenuDetailed, CloseBurgerIcon, NavBurgerList, Title } from "./styles";
interface IProps {
  open?: boolean;
  close?: () => void;
}

export const MenuDetailed = ({ open, close }: IProps) => {
  const { width = 0 } = useWindowSize();

  if (width < 767) {
    return (
      <>
        <StyledMenuDetailed open={open} onClick={close}>
          <TogglerTheme />
          <CloseBurgerIcon />

          <NavBurgerList>
            <Link to={ROUTE.SEARCH} onClick={close}>
              <Title>Search</Title>
            </Link>

            <Link to={ROUTE.FAVORITES} onClick={close}>
              <Title>Favorites</Title>
            </Link>

            <Link to={ROUTE.SHOP_BAG} onClick={close}>
              <Title>Shop</Title>
            </Link>

            <Link to={ROUTE.ACCOUNT} onClick={close}>
              <Title>Account</Title>
            </Link>
          </NavBurgerList>
        </StyledMenuDetailed>
      </>
    );
  }
  return (
    <>
      <p>"tgrdffgted"</p>
    </>
  );
};
