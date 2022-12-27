import styled from "styled-components";
import { Media } from "ui";


export const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  padding: 15px 0;
`;

export const Container = styled.div`
  width: 100%;
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
