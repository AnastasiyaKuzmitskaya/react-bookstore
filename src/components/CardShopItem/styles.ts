import { CloseIcon } from "assets";
import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

export const StyledCartTotal = styled.li`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 242px;
  width: 100%;
  padding-right: 10px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px ${Color.Secondary};
  }
  ${Media.MD} {
    justify-content: space-between;
    height: 194px;
  }
  ${Media.SM} {
    flex-direction: column;
    height: auto;
  }
`;
export const Image = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  padding: 0 46px;
  margin-right: ${Margin.ExtraMedium};
  background-color: ${Color.Blue};
  ${Media.LG} {
    width: 100%;
    margin-right: 0;
  }
  ${Media.SM} {
    margin-bottom: 20px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  margin-right: 120px;
  ${Media.LG} {
    margin-right: 0;
  }

  ${Media.MD} {
    justify-content: flex-start;
    padding-top: 16px;
  }
`;

export const Title = styled.h2`
  ${Typography.H3};
  color: ${Color.Primery_Text};
  margin-bottom: 8px;
  ${Media.MD} {
    ${Typography.S1};
  }
`;

export const Authors = styled.p`
  ${Typography.S1};
  color: ${Color.Secondary_Text};
  margin-bottom: 24px;
  ${Media.MD} {
    margin-bottom: 22px;
  }
`;

export const CountAndCostDescription = styled.div`
  ${Media.MD} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CountDescription = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  background: transparent;
  border: none;
  ${Media.MD} {
    justify-content: flex-start;
  }
`;

export const ButtonCount = styled.button`
  width: 40px;
  height: 40px;
  ${Typography.H3}
  color: ${Color.Primary};
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${Media.MD} {
    ${Typography.S1}
  }
`;
export const AmountCount = styled.span`
  ${Typography.H3}
  color: ${Color.Primary};
  ${Media.MD} {
    ${Typography.S1}
  }
`;

export const CostPrice = styled.div`
  display: flex;
  align-items: center;
  margin-right: 113px;
  ${Typography.H3}
  ${Media.LG} {
    margin-right: 0;
    ${Typography.S1}
  }
  ${Media.SM} {
  }
`;

export const ButtonRemoveIcon = styled(CloseIcon)`
  display: flex;
  align-items: center;
  align-self: center;
  padding-top: 10px;
  height: 28px;
  width: 28px;
  fill: black;
  background: transparent;
  border: none;
  ${Media.LG} {
    align-items: flex-start;
    align-self: baseline;
    height: 22px;
    width: 22px;
  }

  ${Media.SM} {
    position: absolute;
    width: 34px;
    height: 34px;
    top: 0px;
    right: 10px;
    background-color: ${Color.Primary};
    border: none;
    cursor: pointer;
    fill: white;
  }
`;
