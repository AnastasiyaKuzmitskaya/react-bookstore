import { useWindowSize } from "hooks";
import { useNavigate } from "react-router-dom";
import { Breakpoint, Color } from "ui";
import { ButtonArrow, StyledArrowIcon } from "./styles";

export const ArrowBack = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { width = 0 } = useWindowSize();

  return (
    <ButtonArrow onClick={handleBack}>
      <StyledArrowIcon width={width < Breakpoint.MD ? "30" : "40"} fill={Color.Primery_Text} />
    </ButtonArrow>
  );
};
