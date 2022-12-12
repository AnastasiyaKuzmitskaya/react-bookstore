import { INewBookApi } from "../../services/types/types";
import { BookItem } from "../BookItem";
import { StyledBookList } from "./styles";

interface IProps {
  books: INewBookApi[];
}

export const BookList = ({ books }: IProps) => {
  return (
    <StyledBookList>
      {books.map((book) => (
        <BookItem book={book} key={book.isbn13} />
      ))}
    </StyledBookList>
  );
};