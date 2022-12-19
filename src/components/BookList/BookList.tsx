import { INewBookApi } from "services";
import { BookItem } from "components";
import { StyledBookList } from "./styles";

interface IProps {
  books: INewBookApi[];
}

export const BookList = ({ books }: IProps) => {
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
