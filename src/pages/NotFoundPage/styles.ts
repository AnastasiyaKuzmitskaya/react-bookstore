import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const NotFoundStyled = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  margin-block: 72px;
  ${Media.MD} {
    margin-block: 56px;
  }
`;


const Description = styled.h3`
  ${Typography.H3}
  text-align: center;
  color: ${Color.Primery_Text};
`;

export{NotFoundStyled, Description};