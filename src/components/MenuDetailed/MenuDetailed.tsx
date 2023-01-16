import { Search, TogglerTheme } from "components";
import { useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { getUser, useAppSelector } from "store";
import {
  StyledMenuDetailed,
  CloseBurgerIcon,
  NavBurgerList,
  Title,
  Background,
  BurgerHeader,
  Button,
} from "./styles";
interface IProps {
  open?: boolean;
  close?: () => void;
}

export const MenuDetailed = ({ open, close }: IProps) => {
  const { width = 0 } = useWindowSize();
  const { isAuth } = useAppSelector(getUser);

  if (isAuth) {
    return (
      <>
        {width < 769 && (
          <>
            <Background open={open} onClick={close} />
            <StyledMenuDetailed open={open} onClick={close}>
              <BurgerHeader>
                <TogglerTheme />
                <CloseBurgerIcon />
              </BurgerHeader>
              <Search />
              <NavBurgerList>
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
        )}
      </>
    );
  } else {
    return (
      <>
        {width < 769 && (
          <>
            <Background open={open} onClick={close} />
            <StyledMenuDetailed open={open} onClick={close}>
              <BurgerHeader>
                <TogglerTheme />
                <CloseBurgerIcon />
              </BurgerHeader>
              <Search />

              <NavBurgerList>
                <Link to={ROUTE.REGISTRATION} onClick={close}>
                  <Button type="button">SIGN_IN</Button>
                </Link>
              </NavBurgerList>
            </StyledMenuDetailed>
          </>
        )}
      </>
    );
  }
};
