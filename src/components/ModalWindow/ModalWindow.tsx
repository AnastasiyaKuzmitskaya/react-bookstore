import { Portal, TargetPortal } from "components";
import { StyledModalWindow, CloseButton, ModalStatusText, ModalInfo, ModalWrapper } from "./styles";

export type ModalStatus = "success" | "error";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
  message: string;
  status: ModalStatus;
}

export const ModalWindow = ({ isOpen, handleModal, message, status }: IProps) => {
  return isOpen ? (
    <Portal target={TargetPortal.MODAL}>
      <StyledModalWindow>
        <ModalWrapper>
          <ModalStatusText status={status}>{status}</ModalStatusText>
          <ModalInfo>{message}</ModalInfo>
          <CloseButton onClick={handleModal}> close</CloseButton>
        </ModalWrapper>
      </StyledModalWindow>
    </Portal>
  ) : null;
};
