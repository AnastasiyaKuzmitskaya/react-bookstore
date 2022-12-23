import styled from "styled-components";
import { Color } from "ui";

export const StyledToggler = styled.input`
  position: relative;
  width: 64px;
  height: 32px;
  background-color: ${Color.Blue};
  border: 2px solid ${Color.Secondary};
  border-radius: 50px;
  appearance: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 2px ${Color.White};
  transform-origin: left center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 3px;
    left: 3px;
    display: block;
    width: 22px;
    height: 22px;
    background: ${Color.Lighte};
    border-radius: 50px;
    transition: all 0.2s ease-in-out;
  }
  &:checked {
    background-color: ${Color.Red};
    box-shadow: inset 0 0 0 2px ${Color.Secondary};
    border: 2px solid ${Color.White};

    &::before {
      content: "";
      left: 34px;
      background: ${Color.Lighte};
    }
  }
`;