import styled from "styled-components";
import { Margin } from "ui";

export const StyledBookList = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  column-gap: ${Margin.ExtraMedium};
  row-gap: ${Margin.SuperLarge};
`;
