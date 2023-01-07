import { BurgerMenuIcon } from "assets";
import { MenuDetailed } from "components";
import { useWindowSize } from "hooks";
import { useState } from "react";
import { getUser, useAppSelector } from "store";
import { Color } from "ui";
import { StyledBurger } from "./styles";

export const BurgerNavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width = 0 } = useWindowSize();
  const { isAuth } = useAppSelector(getUser);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  if (isAuth) {
    return (
      <>
        {width < 768 && (
          <>
            <StyledBurger whileHover={{ scale: 1.1 }}>
              <BurgerMenuIcon width="28" height="28" fill={Color.Primary} onClick={handleOpen} />
            </StyledBurger>
            <MenuDetailed close={handleClose} />
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {width < 768 && (
          <>
            <p>sgdgsdgsgsd</p>
          </>
        )}
      </>
    );
  }
};
