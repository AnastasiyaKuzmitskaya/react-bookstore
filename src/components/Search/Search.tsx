import { SearchLogoIcon } from "assets";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { SearchButton, SearchInput, StyledForm } from "./styles";

export const Search = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    navigate(`/react-bookstore/search/${data.query}/1`);
    reset();
  };

  return (
    <StyledForm>
      <SearchInput placeholder="Search..." type="text" {...register("query")} />
      <SearchButton onClick={handleSubmit(onSubmit)} type="submit" whileHover={{ scale: 1.1 }}>
        <SearchLogoIcon />
      </SearchButton>
    </StyledForm>
  );
};
