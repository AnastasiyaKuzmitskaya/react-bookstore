import { INewBookApi } from "services";
import { BookItem } from "components";
import { ErrorMassage, StyledBookList } from "./styles";
import ColorRing from "react-spinners/CircleLoader";
interface IProps {
  books: INewBookApi[];
  isLoading: boolean;
  error: string | null;
}

export const BooksList = ({ books, isLoading, error }: IProps) => {
  if (isLoading) {
    return <ColorRing loading={isLoading} size={100} />;
  }

  if (error) {
    return <ErrorMassage>Sorry, {error}</ErrorMassage>;
  }

  return (
    <>
      {" "}
      <StyledBookList>
        {error && <p />}
        {books.map((book) => (
          <BookItem book={book} key={book.isbn13} />
        ))}
      </StyledBookList>
    </>
  );
};
