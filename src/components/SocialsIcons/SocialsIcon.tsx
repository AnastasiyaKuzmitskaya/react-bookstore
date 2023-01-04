import { FacebookIcon, TwitterIcon } from "assets";
import { IconItem, StyledIcons } from "./styles";

export const SocialsIcons = () => {
  return (
    <>
      <StyledIcons>
        <IconItem href="https://ru-ru.facebook.com/">
          <FacebookIcon />
        </IconItem>
        <IconItem href="https://twitter.com/?lang=ru">
          <TwitterIcon />
        </IconItem>
      </StyledIcons>
    </>
  );
};
