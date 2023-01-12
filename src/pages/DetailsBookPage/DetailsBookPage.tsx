import { ArrowBack, BookTabs, DetailsBook, Loading, SocialsIcons, Title } from "components";
import { BookSlider } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails, useAppDispatch, useAppSelector } from "store";
import { getBookDetails } from "store/selectors/bookDetailsSelector";
import { StyledBookPage } from "./styles";

export const DetailsBookPage = () => {
  const { isbn = "" } = useParams();
  const { error, isLoading, book } = useAppSelector(getBookDetails);
  const dispatch = useAppDispatch();
  const { title } = book;

  useEffect(() => {
    dispatch(fetchBookDetails(isbn));
  }, [isbn, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Title title="We have some Problems. See u later" />;
  }

  return (
    <StyledBookPage>
      <ArrowBack />
      <Title title={title} />
      <DetailsBook book={book} />
      <BookTabs book={book} />
      <SocialsIcons />
      <Title title="Similar Books" />
      <BookSlider />
    </StyledBookPage>
  );
};
