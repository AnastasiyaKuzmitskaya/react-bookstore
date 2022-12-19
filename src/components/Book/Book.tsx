import { useEffect } from "react";
import { featchNewBooks, getBooks, useAppDispatch, useAppSelector } from "store";
import { BookList } from "components";
import { StyledBook, Title } from "./styles";

export const Book = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(featchNewBooks());
  }, [dispatch]);

  return (
    <StyledBook>
      <Title>New Releases Books</Title>
      <BookList books={books} />
    </StyledBook>
  );
};
