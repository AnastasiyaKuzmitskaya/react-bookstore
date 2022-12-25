import { BooksList } from "components";
import React, { useEffect } from "react";
import { featchNewBooks, getBooks, useAppDispatch, useAppSelector } from "store";
import { Title } from "./style";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(featchNewBooks());
  }, [dispatch]);

  return (
    <>
      <Title>New Releases Books</Title>
      <BooksList books={books} />
    </>
  );
};
