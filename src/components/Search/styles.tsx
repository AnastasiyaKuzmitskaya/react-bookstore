import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledForm = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 542px;
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
  padding: 14px 16px 10px 20px;
  color: ${Color.Secondary};
  border: 1px solid ${Color.Gray};
  border-right: none;
  opacity: 40%;
  ${Typography.SearchInput}
  outline: none;

  &::placeholder {
    ${Typography.SearchInput}
    color:${Color.Primary};
    opacity: 1;
  }
  &:hover {
    border: 1px solid ${Color.Primary_Light};
    transition: all 0.5s;
  }
  &:focus {
    opacity: 70%;
  }
`;

const SearchButton = styled.button``;

export { StyledForm, SearchInput, SearchButton };
