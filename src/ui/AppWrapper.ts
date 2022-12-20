import styled from "styled-components";
import { Media } from "ui";

export const AppWrapper = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;

  ${Media.XL} {
    max-width: 1020px;
    margin: 0 40px;
  }

  ${Media.LG} {
    max-width: 820px;
    margin: 0 10px;
  }
  ${Media.MD} {
    min-width: none;
  }
`;
