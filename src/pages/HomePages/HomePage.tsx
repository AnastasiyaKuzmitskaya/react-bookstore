import { BooksList } from "components";
import React, { useEffect } from "react";
import { fetchNewBooks, getBooks, useAppDispatch, useAppSelector } from "store";
import { Title } from "components";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { books, error, isLoading } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <StyledHomePage>
      <Title title="New Releases Books" />
      <BooksList books={books} isLoading={isLoading} error={error} />
    </StyledHomePage>
  );
};
