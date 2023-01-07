import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

interface ModalStatusProps {
  status: "success" | "error";
}

export const StyledModalWindow = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
export const ModalWrapper = styled.div`
  top: calc(50% - 340px);
  right: calc(50% - 470px);
  z-index: 50;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  padding: 15px;
  width: 940px;
  height: 540px;
  transform-origin: 100% 100%;
  background-color: ${Color.Purple};
  border: 2px solid ${Color.Primary_Light};
  border-radius: 24px;
  transition: all 0.3s ease-in-out;

  ${Media.XL} {
    top: calc(50% - 230px);
    right: calc(50% - 310px);
    width: 620px;
    height: 460px;
  }
  ${Media.MD} {
    top: calc(100% - 80vh);
    left: 0;
    width: 100%;
    height: 80vh;
    padding: 15px;
    overflow: auto;
  }
`;

export const ModalStatusText = styled.h2`
  ${Typography.H2}
  color: ${({ status }: ModalStatusProps) => (status === "success" ? Color.Primary : Color.Red)};
  margin-bottom: ${Margin.Small};
`;

export const ModalInfo = styled.p`
  ${Typography.S1}
  color:${Color.Primary_Light};
  text-transform: capitalize;
  
`;

export const CloseButton = styled.button`
  
  ${Typography.H1}
  color: ${Color.Button_Color};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
