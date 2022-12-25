import styled from "styled-components";
import { Media } from "ui";

export const StyledAPP = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  max-width: 1920px;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
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
