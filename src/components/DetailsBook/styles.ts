import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

const StyledDetailsBook = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${Margin.ExtraLarge};
  ${Media.LG} {
    flex-direction: column;
  }
  ${Media.MD} {
    margin-bottom: ${Margin.ExtraLargeMobile};
  }
`;

const BookImageContainer = styled.div`
  position: relative;
  width: 40%;
  
  ${Media.MD} {
    width: 100%;
  }
`;
const BookImage = styled.img`
  
  width: 100%;
  background-color: ${Color.Orange};
`;


const BookDetails = styled.div`
  width: 50%;
  padding-top: ${Margin.Large};
  border-top: 1px solid ${Color.Gray};
  ${Media.MD} {
    width: 100%;
  }
`;

const BookPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Margin.Medium};
`;

const Price = styled.h2`
  ${Typography.H2};
  color: ${Color.Primery_Text};
`;

const BookInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${Media.MD} {
    flex-direction: column;
  }
`;
const Parameters = styled.p`
  ${Typography.B2}
  line-height: 32px;
  font-weight: 400;
  color: ${Color.Secondary_Text};
`;
const Attribute = styled.p`
  ${Typography.B1}
  text-align: end;
  line-height: 32px;
  color: ${Color.Primery_Text};
  ${Media.MD} {
    text-align: start;
  }
`;
const MoreDetails = styled.button`
  display: flex;
  align-content: center;
  margin-top: 10px;
  ${Typography.S1}
  background: transparent;
  color: ${Color.Primery_Text};
  border: none;
  cursor: pointer;
  :hover {
    color: ${Color.Red};
    transition: all 0.5s;
  }
`;

const InfoArrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  StyledDetailsBook,
  BookImageContainer,
  BookImage,
  BookDetails,
  BookPriceWrapper,
  Price,
  BookInfo,
  Parameters,
  Attribute,
  MoreDetails,
  InfoArrow,
};
