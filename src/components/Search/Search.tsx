import { SearchLogoIcon } from "assets";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { SearchButton, SearchInput, StyledForm } from "./styles";


export const Search = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    navigate(`search/${data.searchValue}/1`);
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