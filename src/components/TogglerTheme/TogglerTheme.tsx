import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "store/selectors/theme-selector";
import { setTheme } from "store/slices/theme-slice";
import { StyledToggler } from "./styles";

export const TogglerTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };
  return <StyledToggler onClick={handleTheme} />;
};
