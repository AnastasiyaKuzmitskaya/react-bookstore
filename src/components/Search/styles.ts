import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 542px;
  padding: 14px 16px 10px 20px;
  border: 1px solid ${Color.Gray};
  box-shadow: 5px 5px 5px ${Color.Gray};

  ${Media.MD} {
    max-width: 342px;
  }
  ${Media.SM} {
    max-width: 100px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 542px;

  color: ${Color.Secondary};
  border: none;
  outline: none;
  opacity: 40%;
  ${Typography.SearchInput}
  outline: none;

  &::placeholder {
    ${Typography.SearchInput}
    color:${Color.Primary};
    opacity: 1;
  }

  &:focus {
    opacity: 70%;
  }
`;


const SearchButton = styled(motion.button)`
  width: 100%;
  max-width: 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
`;

export { StyledForm, SearchInput, SearchButton };
