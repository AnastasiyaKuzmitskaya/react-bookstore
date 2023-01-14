import styled from "styled-components";
import { Color, Media, Typography, Margin } from "ui";

export const StyledTotalCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-bottom: ${Margin.ExtraLarge};
  width: 30%;
  ${Media.MD} {
    width: 50%;
  }
  ${Media.SM} {
    width: 100%;
  }
`;
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-bottom: ${Margin.Medium};
`;

export const InfoTitle = styled.p`
  ${Typography.S1}
  font-weight: 400;
  color: ${Color.Secondary};
  margin-bottom: ${Margin.Smaller};
`;

export const InfoValue = styled.p`
  ${Typography.S1}
  font-weight: 400;
  color: ${Color.Primery_Text};
  text-align: end;
`;

export const ValueTotal = styled.h2`
  ${Typography.H2}
  text-align: end;
`;

export const TitleTotal = styled.h2`
  ${Typography.H2}
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 0;
  ${Typography.H3}
  color: ${Color.Button_Text};
  letter-spacing: 0.05em;
  border: none;
  background-color: ${Color.Primary};
  transition: all 0.4s;
  cursor: pointer;
  
  :hover {
    background: ${Color.Hover};
  }
  :active {
    background: ${Color.Button_Color};
  }
`;

