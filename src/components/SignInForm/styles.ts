import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledSignInForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0 32px 32px 32px;
`;
export const InputLabel = styled.p`
  ${Typography.H3};
  font-size: 16px;
  color: ${Color.Primary};
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  width:100%;

  border: 1px solid ${Color.Secondary};

  margin-bottom: 5px;
  padding: 10px 20px 10px 20px;
  border: 1px solid ${Color.Gray};
  outline: none;
  &::placeholder {
    color: ${Color.Secondary};
    text-transform: capitalize;
  }
  &:focus {
    background-color: ${Color.Blue};
    border: 2px solid ${Color.Gray};
  }
`;

export const ForgotPassword = styled.p`
  ${Typography.B2}
  color: ${Color.Primery_Text};
  margin-bottom: 40px;
  cursor: pointer;
`;

export const ButtonForm = styled(motion.button)`
  width: 100%;
  padding: 16px 0;

  ${Typography.S1};
  font-size: 24px;
  text-transform: uppercase;
  color: ${Color.White};

  background-color: ${Color.Primary};

  :hover {
    background: ${Color.Hover};
    transition: all 0.3s;
  }
  :disabled {
    background: ${Color.Secondary};
  }
`;

export const ErrorMessage = styled.p`
  padding-top: 10px;
  color: ${Color.Red};
  text-transform: uppercase;
`;
