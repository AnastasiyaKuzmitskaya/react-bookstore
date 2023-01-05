import { Title } from "components";
import { Description, NotFoundStyled } from "./styles";

export const NotFoundPage = () => {
  return (
    <NotFoundStyled>
      <Title title="404" />
      <Description>This page does not exist</Description>
    </NotFoundStyled>
  );
};
