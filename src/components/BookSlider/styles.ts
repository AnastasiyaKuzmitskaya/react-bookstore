import styled from "styled-components";
import { Color, Margin, Media } from "ui";

export const StyledSlider = styled.div`
  margin-bottom: ${Margin.ExtraLarge};
  padding: 0 30px;
  ${Media.SM} {
    padding: 0 20px;
    margin-bottom: ${Margin.ExtraLargeMobile};
  }
  .slick-arrow.slick-prev {
    z-index: 100;
  }
  .slick-prev:before {
    color: ${Color.Primery_Text};
  }
  .slick-next:before {
    color: ${Color.Primery_Text};
  }
`;
