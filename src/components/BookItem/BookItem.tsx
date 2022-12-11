import { INewBookApi } from "../../services";
import { BookImg, BookPrice, BookSubtitle, BookTitle, StyledBookItem } from "./styles";

interface IProps {
  book: INewBookApi;
}

export const BookItem = ({ book }: IProps) => {
 

  
  
  return (
    <StyledBookItem key={book.isbn13}>
      <BookImg src={book.image} alt={book.title} />
      <BookTitle>{book.title}</BookTitle>
      <BookSubtitle>{book.subtitle}</BookSubtitle>
      <BookPrice>{book.price}</BookPrice>
    </StyledBookItem>
  );
};
