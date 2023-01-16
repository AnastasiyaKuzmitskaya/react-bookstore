import styled from "styled-components";
import { Color, Margin, Media, Typography } from "ui";

export const StyledProfile = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Margin.ExtraLarge};
  ${Media.LG} {
    position: relative;
  }
  ${Media.MD} {
    margin-bottom: ${Margin.ExtraLargeMobile};
  }
`;
export const SubTitle = styled.h3`
  margin-bottom: 16px;
  ${Typography.H3};
  color: ${Color.Primery_Text};
  text-transform: uppercase;
`;

export const AccountFormInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: ${Margin.SuperLarge};

  ${Media.LG} {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
    margin-bottom: ${Margin.SuperLargeMobile};
  }
`;

export const FormInputLabel = styled.div`
  ${Typography.H3};
  font-size: 16px;
  color: ${Color.Primery_Text};
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  flex-grow: 1;
  padding: 5px 20px;
  ${Typography.SearchInput};
  color: ${Color.Primary};
  border: 1px solid ${Color.Gray};
  outline: none;

  &:focus {
    background-color: ${Color.Blue};
    border: 2px solid ${Color.Gray};
  }

  &::placeholder {
    ${Typography.SearchInput};
    color: ${Color.Primary_Light};
    opacity: 1;
  }
`;
export const PasswordForm = styled.div`
  display: flex;
  
  gap: 26px;
  width: 100%;
  
  margin-bottom: ${Margin.ExtraLarge};

  ${Media.LG} {
    flex-direction: column;
    gap: 8px;
    margin-bottom: ${Margin.SuperLargeMobile};

  }
  
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  grid-gap: 32px;
  margin-left: auto;
  width: 50%;
  ${Media.LG} {
    justify-content: space-between;
    width: 100%;
  }
  ${Media.MD} {
    flex-direction: column;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  padding: 16px 0;
  ${Typography.S1}
  font-size: 24px;
  cursor: pointer;
  :hover,
  :active {
    background: ${Color.Hover};
    transition: all 0.3s;
  }
  :disabled {
    background: ${Color.Secondary};
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  color: ${Color.Primary};
  background: ${Color.White};
  border: 1px solid ${Color.Secondary};
  padding: 16px 0;
  ${Typography.S1}
  font-size: 24px;
  cursor: pointer;

  :hover,
  :active {
    background: ${Color.Hover};
  }

  :disabled {
    background: ${Color.Secondary};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputPassWrapper = styled.div`
  width: 50%;
  ${Media.LG} {
    width: 100%;
  }
`;

export const ConfirmPassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 50%;
  ${Media.LG} {
    width: 100%;
  }
`;


export const ErrorMessage = styled.p`
  padding-top: 10px;
  color: ${Color.Red};
  text-transform: uppercase;
`;

