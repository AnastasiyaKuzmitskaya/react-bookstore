import { useDispatch, useSelector } from "react-redux";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { selectTheme } from "store/selectors/theme-selector";
import { setTheme } from "store/features/theme-slice";
import { Color } from "ui";
import { StyledToggler } from "./styles";


export const TogglerTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };
  return (
    <StyledToggler onClick={handleTheme} whileHover={{ scale: 1.1 }}>
      {theme === "light" ? (
        <IoSunnyOutline size="26px" fill={Color.Primary} />
      ) : (
        <IoMoonOutline size="26px" fill={Color.Primary} />
      )}
    </StyledToggler>
  );
};
