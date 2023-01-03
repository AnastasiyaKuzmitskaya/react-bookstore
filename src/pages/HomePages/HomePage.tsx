import { BooksList } from "components";
import React, { useEffect } from "react";
import { featchNewBooks, getBooks, useAppDispatch, useAppSelector } from "store";
import { Title } from "components";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(featchNewBooks());
  }, [dispatch]);

  return (
    <>
      {" "}
      <Title title="New Releases Books" />
      <BooksList books={books} />
    </>
  );
};
