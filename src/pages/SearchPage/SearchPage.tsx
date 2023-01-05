import { ArrowBack, BooksList, Title } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBooksBySearch, getSearch, useAppDispatch, useAppSelector } from "store";
import { EmptyList, StyledSearchPage } from "./styles";

export const SearchPage = () => {
  const { searchValue, searchResponse, isLoading, error } = useAppSelector(getSearch);
  const dispatch = useAppDispatch();
  const { page = "1" } = useParams();

  useEffect(() => {
    if (searchValue) {
      dispatch(
        fetchBooksBySearch({
          searchValue,
          page,
        }),
      );
    }
  }, [dispatch, searchValue, page]);

  return (
    <>
      <ArrowBack />
      <StyledSearchPage>
        <Title title={`'${searchValue ? searchValue : " "}' search results`} />
        {searchResponse.total !== "0" ? (
          <BooksList books={searchResponse.books} isLoading={isLoading} error={error} />
        ) : (
          <EmptyList>No results were found for your search</EmptyList>
        )}
      </StyledSearchPage>
    </>
  );
};
