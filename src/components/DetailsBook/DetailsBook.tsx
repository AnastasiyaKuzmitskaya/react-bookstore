import { FavoriteButton, ModalWindow, RatingStars } from "components";
import { IBookDetailsApi } from "services";
import { useToggle } from "hooks";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import {
  Attribute,
  BookDetails,
  BookImage,
  BookImageContainer,
  BookInfo,
  BookPriceWrapper,
  CartButton,
  InfoArrow,
  MoreDetails,
  Parameters,
  Price,
  StyledDetailsBook,
} from "./styles";

interface IProps {
  book: IBookDetailsApi;
}

export const DetailsBook = ({ book }: IProps) => {
  const [isActive, setIsActive] = useToggle();
  const [isOpen, setIsOpen] = useToggle();

  const handleDetails = (): void => {
    setIsActive();
  };

  return (
    <StyledDetailsBook>
      <BookImageContainer>
        <BookImage src={book.image} alt={book.title} />
        <FavoriteButton book={book} />
      </BookImageContainer>

      <BookDetails>
        <BookPriceWrapper>
          <Price>{book.price === "$0.00" ? "Free" : book.price}</Price>
          <RatingStars stars={book.rating} />
        </BookPriceWrapper>

        <BookInfo>
          <Parameters>Authors</Parameters>
          <Attribute>{book.authors}</Attribute>
        </BookInfo>

        <BookInfo>
          <Parameters>Publisher</Parameters>
          <Attribute>{book.publisher}</Attribute>
        </BookInfo>

        <BookInfo>
          <Parameters>Language</Parameters>
          <Attribute>{book.language}</Attribute>
        </BookInfo>

        <BookInfo>
          <Parameters>Year</Parameters>
          <Attribute>{book.year}</Attribute>
        </BookInfo>

        {isActive && (
          <>
            <BookInfo>
              <Parameters>Pages</Parameters>
              <Attribute>{book.pages}</Attribute>
            </BookInfo>

            <BookInfo>
              <Parameters>ISBN 13</Parameters>
              <Attribute>{book.isbn13}</Attribute>
            </BookInfo>

            <BookInfo>
              <Parameters>URL</Parameters>
              <Attribute>{book.url}</Attribute>
            </BookInfo>
          </>
        )}

        <MoreDetails onClick={handleDetails}>
          {isActive ? (
            <InfoArrow>
              More details <HiChevronUp />
            </InfoArrow>
          ) : (
            <InfoArrow>
              More details <HiChevronDown />
            </InfoArrow>
          )}
        </MoreDetails>
        <CartButton type="button" onClick={setIsOpen}>
          add to cart
        </CartButton>
        <ModalWindow
          isOpen={isOpen}
          status={"error"}
          message={
            // eslint-disable-next-line max-len
            "you are not a user of the site.To add a book to the cart, you need to go through authorization"
          }
          handleModal={setIsOpen}
        />
      </BookDetails>
    </StyledDetailsBook>
  );
};
