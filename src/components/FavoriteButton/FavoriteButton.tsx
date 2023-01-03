import { useEffect, useState } from "react";
import { IBookDetailsApi } from "services";
import {
  addFavorites,
  getFavoritesBooks,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
} from "store";
import { Heard, StyledFavoriteButton } from "./styles";

interface IProps {
  book: IBookDetailsApi;
  isFavorite: boolean;
}

export const FavoriteButton = ({ book, isFavorite }: IProps) => {
  const [isFavorites, setIsFavorite] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { favoritesBook } = useAppSelector(getFavoritesBooks);

  const handleAddFavorites = () => {
    if (isFavorites) {
      dispatch(removeFavorite(book.isbn13));
      setIsFavorite(false);
    } else {
      dispatch(addFavorites(book));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    favoritesBook.find((item) => item.isbn13 === book.isbn13)
      ? setIsFavorite(true)
      : setIsFavorite(false);
  }, [book.isbn13, favoritesBook]);

  return (
    <StyledFavoriteButton type="button" onClick={handleAddFavorites} $isFavorites={isFavorite}>
      <Heard $isFavorites={isFavorites} />
    </StyledFavoriteButton>
  );
};
