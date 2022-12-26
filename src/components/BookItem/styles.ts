import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

export const StyledBookItem = styled.li`
  display: block;
  max-width: 352px;
  width: 100%;
  margin: 0 auto; 
  border-radius: 15px;
  border: 1px solid ${Color.Gray};
  transition: all 0.5s ease-out;
  position: relative;
  cursor: pointer;
  &:hover {
    position: relative;
    transform: translateY(-10px);
    box-shadow: 10px 5px 5px ${Color.Secondary};
  }
  ${Media.MD} {
    max-width: 272px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const BookImg = styled.img`
  min-width: 226px;
  width: 100%;
  background-color: ${Color.Blue};
  
  margin-bottom: ${Margin.Small};
  border-radius: 15px;
  ${Media.LG} {
    min-width: 210px;
  }
  ${Media.MD} {
    min-width: 176px;
  }
`;

export const BookTitle = styled.h3`
  ${Typography.H3};
  padding: 0 10px;
  margin-bottom: ${Margin.ExtraSmall};
  display: block;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;

export const BookSubtitle = styled.p`
  ${Typography.S1};
  padding: 0 10px;
  margin-bottom: ${Margin.SuperLarge};
  ${Media.MD} {
    margin-bottom: ${Margin.Large};
  }
`;

export const BookPrice = styled.p`
  ${Typography.H3};
  align-content: flex-end;  
  margin-top: auto;
  padding: 0 10px 10px;
`;