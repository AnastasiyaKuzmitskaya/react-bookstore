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
  margin-right: 24px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:last-child {
    margin-right: 0;
  }

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
