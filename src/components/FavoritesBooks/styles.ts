import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

export const StyledFavoritesBooks = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 192px;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px ${Color.Secondary};
  }
  ${Media.LG} {
    height: 170px;
  }
  ${Media.MD} {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding-bottom: 32px;
  }
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  padding: 0 46px;
  margin-right: ${Margin.SuperLargeMobile};
  background-color: ${Color.Blue};

  ${Media.LG} {
    width: 100%;
    padding: 0 38px;
    margin-right: ${Margin.ExtraMedium};
  }
  ${Media.MD} {
    width: 100%;
    padding: 0 50px;
    margin-right: 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 36px;
  ${Media.LG} {
    padding-top: 20px;
  }
  ${Media.MD} {
    padding: 20px 10px 0 10px;
  }
`;

export const Title = styled.h2`
  ${Typography.H3};
  color: ${Color.Primery_Text};
  margin-bottom: 8px;
`;

export const Authors = styled.p`
  ${Typography.S1};
  color: ${Color.Secondary_Text};
  margin-bottom: 24px;
`;

export const PriceAndRating = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  ${Typography.H3};
  color: ${Color.Primery_Text};
  align-content: flex-end;
`;

export const SeparatorLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Color.Gray};
`;
