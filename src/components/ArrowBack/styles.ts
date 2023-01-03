import styled from "styled-components";
import { Media } from "ui";

export const ButtonArrow = styled.s`
  text-align: start;
  width: 50px;
  margin-bottom: 32px;
  background: none;
  border: none;
  cursor: pointer;
  ${Media.MD} {
    margin-bottom: 24px;
  }
`;