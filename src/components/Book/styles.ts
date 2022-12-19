import styled from "styled-components";
import { Margin, Media, Typography } from "ui";

export const StyledBook = styled.div`
  margin-bottom: ${Margin.ExtraLarge};

  ${Media.SM} {
    margin-bottom: ${Margin.ExtraLargeMobile};
    flex-direction: column;
  }

  /* display: flex;
  margin-bottom: ${Margin.ExtraLarge};
  ${Media.SM} {
   
  } */
`;
export const Title = styled.h1`
  ${Typography.H1};
  text-align: left;
  margin-bottom: ${Margin.SuperLarge};

  ${Media.SM} {
    margin-bottom: SuperLargeMobile;
  }
`;
