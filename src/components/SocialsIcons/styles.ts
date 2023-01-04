import styled from "styled-components";
import { Color, Margin } from "ui";

const StyledIcons = styled.div`
  display: flex;
  text-align: center;
  justify-content: left;
  margin-bottom: ${Margin.ExtraLarge};
`;
const IconItem = styled.a`
  width: 100%;
  max-width: 24px;
  height: 24px;
  
  cursor: pointer;
  &:active {
    path {
      stroke: ${Color.Lighte};
      fill: ${Color.Primary};
    }
  }
  &:hover {
    path {
      fill: ${Color.Secondary};
    }
  }
`;
export { StyledIcons, IconItem };
