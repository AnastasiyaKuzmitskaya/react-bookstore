import styled from "styled-components";
import { Color, Margin, Media } from "ui";

export const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  column-gap: ${Margin.ExtraMedium};
  row-gap: ${Margin.SuperLarge};
  padding-bottom: ${Margin.ExtraLarge};
  border-bottom: 1px solid ${Color.Gray};
  margin-bottom:${Margin.SuperLarge};
  ${Media.LG} {
    grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  }
  ${Media.MD} {
    grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
    padding-bottom: ${Margin.ExtraLargeMobile};
    margin-bottom:${Margin.SuperLargeMobile};
  }
`;
