import { Link } from "react-router-dom";
import { INewBookApi } from "services";
import { BookImg, BookPrice, BookSubtitle, BookTitle, StyledBookItem } from "./styles";

interface IProps {
  book: INewBookApi;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledBookItem key={book.isbn13}>
      <Link to={`/react-bookstore/book/${book.isbn13}`}>
        <BookImg src={book.image} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <BookSubtitle>{book.subtitle}</BookSubtitle>
        <BookPrice>{book.price === "$0.00" ? "Free" : book.price}</BookPrice>
      </Link>
    </StyledBookItem>
  );
};
