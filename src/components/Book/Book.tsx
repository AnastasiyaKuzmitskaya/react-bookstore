import { useEffect } from "react";
import { featchBook, getBooks, useAppDispatch, useAppSelector } from "../../store";
import { BookList } from "../BookList";
import { StyledBook, Title } from "./styles";

export const Book = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(featchBook());
  }, [dispatch]);
  
  
  return (
    <StyledBook>
      <Title>New Releases Books</Title>
      <BookList books={books} />
    </StyledBook>
  );
};
