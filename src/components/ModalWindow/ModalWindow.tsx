import { Portal, TargetPortal } from "components";
import { StyledModalWindow, CloseButton, ModalInfo, ModalWrapper, ModalStatusText } from "./styles";

export type ModalStatus = "success" | "error";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
  message: string;
  messageOpen: string;
  status: ModalStatus;
}

export const ModalWindow = ({ isOpen, handleModal, message, messageOpen, status }: IProps) => {
  return isOpen ? (
    <Portal target={TargetPortal.MODAL}>
      <StyledModalWindow>
        <ModalWrapper>
          <ModalStatusText status={status}>{status}</ModalStatusText>
          <ModalInfo>{message}</ModalInfo>
          <CloseButton onClick={handleModal}> {messageOpen}</CloseButton>
        </ModalWrapper>
      </StyledModalWindow>
    </Portal>
  ) : null;
};
