import { BurgerMenuIcon } from "assets";
import { MenuDetailed } from "components";
import { useWindowSize } from "hooks";
import { useState } from "react";
import { Color } from "ui";
import { StyledBurger } from "./styles";

export const BurgerNavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width = 0 } = useWindowSize();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {width < 769 && (
        <>
          <StyledBurger whileHover={{ scale: 1.1 }}>
            <BurgerMenuIcon width="28" height="28" fill={Color.Primary} onClick={handleOpen} />
          </StyledBurger>
          <MenuDetailed open={isOpen} close={handleClose} />
        </>
      )}
    </>
  );
};
