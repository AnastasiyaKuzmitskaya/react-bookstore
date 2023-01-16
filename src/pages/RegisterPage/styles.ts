import styled from "styled-components";
import { Color, Media, Typography } from "ui";

interface ITabProps {
  isActive: boolean;
}

export const StyledRegisterPage = styled.div`
    display: grid;
    place-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  padding: 0px 32px 40px;

  border: 1px solid ${Color.Gray};

  ${Media.SM} {
    width: 300px;
    padding: 0px 20px 30px;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 72px;

  ${Media.SM} {
    height: 48px;
  }
`;

export const FormTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;

  ${Typography.S1};
  letter-spacing: 0.05em;
  text-transform: uppercase;

  border-bottom: ${({ isActive }: ITabProps) =>
    isActive ? `2px solid ${Color.Primary}` : `2px solid ${Color.Lighte}`};
  border-color: ${({ isActive }: ITabProps) =>
    isActive ? `2px solid ${Color.Primary}` : `2px solid ${Color.Lighte}`};
  color: ${Color.Primary};

  cursor: pointer;

  ${Media.SM} {
    font-size: 18px;
  }
`;
