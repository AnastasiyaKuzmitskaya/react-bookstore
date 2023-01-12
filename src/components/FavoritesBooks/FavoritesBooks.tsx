import { FavoriteButton, RatingStars } from "components";
import { Link } from "react-router-dom";
import { IBookDetailsApi } from "services";
import {
  StyledFavoritesBooks,
  Image,
  Description,
  Title,
  Authors,
  PriceAndRating,
  Price,
  SeparatorLine,
} from "./styles";

interface IProps {
  book: IBookDetailsApi;
}

export const FavoritesBooks = ({ book }: IProps) => {
  return (
    <>
      <StyledFavoritesBooks>
        <Link to={`/react-bookstore/book/${book.isbn13}`}>
          <Image src={book.image} alt={book.title} />
        </Link>
        <FavoriteButton book={book} />
        <Description>
          <Title>{book.title}</Title>
          <Authors>
            {book.authors}, {book.year}
          </Authors>
          <PriceAndRating>
            <Price>{book.price}</Price>
            <RatingStars stars={book.rating} />
          </PriceAndRating>
        </Description>
      </StyledFavoritesBooks>
      <SeparatorLine />
    </>
  );
};
