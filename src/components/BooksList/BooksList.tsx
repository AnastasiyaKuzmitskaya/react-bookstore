import { CSSProperties } from "react";
import { INewBookApi } from "services";
import { BookItem } from "components";
import { ErrorMassage, StyledBookList } from "./styles";
import RotatingLines from "react-spinners/RotateLoader";
import { Color } from "ui";
interface IProps {
  books: INewBookApi[];
  isLoading: boolean;
  error: string | null;
}
const override: CSSProperties = {
  display: "block",
  margin: "100px auto",
};

export const BooksList = ({ books, isLoading, error }: IProps) => {
  if (isLoading) {
    return (
      <RotatingLines cssOverride={override} loading={isLoading} color={Color.Primary} size={100} />
    );
  }

  if (error) {
    return <ErrorMassage>Sorry, an error has occurred. Try again</ErrorMassage>;
  }

  return (
    <>
      {" "}
      <StyledBookList>
        {books.map((book) => (
          <BookItem book={book} key={book.isbn13} />
        ))}
      </StyledBookList>
    </>
  );
};
