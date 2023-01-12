import { ArrowBack, BookSlider, FavoritesBooks, Title } from "components";
import { getFavoritesBooks, useAppSelector } from "store";
import { FavoritesBookList, NothingFavorite, StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favoritesBook } = useAppSelector(getFavoritesBooks);
  return (
    <StyledFavoritesPage>
      <ArrowBack />
      <Title title="favorites" />
      {favoritesBook.length > 0 ? (
        <FavoritesBookList>
          {favoritesBook.map((book) => (
            <FavoritesBooks book={book} key={book.isbn13} />
          ))}
        </FavoritesBookList>
      ) : (
        <NothingFavorite>You don't have favorite books</NothingFavorite>
      )}
      <BookSlider />
    </StyledFavoritesPage>
  );
};
