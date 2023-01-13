import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

interface ModalStatusProps {
  status: "success" | "error";
}

export const StyledModalWindow = styled.div`
  position: fixed;
  bottom: 60px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ModalWrapper = styled.div`
  z-index: 50;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  padding: 25px;
  max-width: 670px;
  max-height: 310px;
  transform-origin: 100% 100%;
  background-color: ${Color.Purple};
  border: 2px solid ${Color.Primary_Light};
  border-radius: 24px;
  transition: all 0.3s ease-in-out;
  ${Media.MD} {
    width: 590px;
    height: 172px;
    padding: 15px;
    overflow: auto;
  }
`;

export const ModalStatusText = styled.p`
  ${Typography.B2}
  color: ${({ status }: ModalStatusProps) =>
    status === "success" ? Color.Primary_Light : Color.Red};
  margin: 0 ${Margin.Small} ${Margin.Small} 0;
`;

export const ModalInfo = styled.h3`
  ${Typography.B1}
  color:${Color.Primary_Light};
  text-transform: capitalize;
  margin: 0 ${Margin.Small} ${Margin.Small} 0;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  ${Typography.B1}
  color: ${Color.Button_Color};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
