import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

export const StyledBookItem = styled.li`
  position: relative;
  display: -webkit-box;
  width: 100%;
  max-width: 352px;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid ${Color.Gray};
  transition: all 0.5s ease-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 10px 5px 5px ${Color.Secondary};
  }
  ${Media.MD} {
    max-width: 272px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const BookImg = styled.img`
  width: 100%;
  min-width: 226px;
  margin-bottom: ${Margin.Small};
  background-color: ${Color.Blue};
  border-radius: 15px 15px 0 0;
  ${Media.LG} {
    min-width: 210px;
  }
  ${Media.MD} {
    min-width: 176px;
  }
`;

export const BookTitle = styled.h3`
  display: -webkit-box;
  height: 64px;
  ${Typography.H3};
  padding: 0 10px;
  margin-bottom: ${Margin.ExtraSmall};
  color: ${Color.Primery_Text};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const BookSubtitle = styled.p`
  padding: 0 10px;
  margin-bottom: ${Margin.SuperLarge};
  ${Typography.S1};
  color: ${Color.Secondary_Text};
  ${Media.MD} {
    margin-bottom: ${Margin.Large};
  }
`;

export const BookPrice = styled.p`
  padding: 0 10px;
  margin-top: auto;
  ${Typography.H3};
  color: ${Color.Primery_Text};
  align-content: flex-end;
`;
