import { SeparatorLine } from "components";
import { useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { IBookCartAPI } from "services";
import { useAppDispatch } from "store";
import { decrementAmount, deleteCart, incrementAmount } from "store/features/cartBookSlice";
import {
  StyledCartTotal,
  Image,
  ButtonRemoveIcon,
  Description,
  Title,
  Authors,
  CountDescription,
  ButtonCount,
  AmountCount,
  CostPrice,
  CountAndCostDescription,
} from "./styles";

interface IProps {
  book: IBookCartAPI;
}

export const CardShopItem = ({ book }: IProps) => {
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const handleCountPlus = () => {
    dispatch(incrementAmount(book));
  };

  const handleCountMinus = () => {
    dispatch(decrementAmount(book));
  };
  const handleDeleteBook = () => {
    dispatch(deleteCart(book));
  };

  return (
    <>
      <StyledCartTotal >
        {width > 768 && (
          <>
            <Link to={`/react-bookstore/book/${book.isbn13}`}>
              <Image src={book.image} alt={book.title} />
            </Link>
            <Description>
              <Title>{book.title}</Title>
              <Authors>
                {book.authors}, {book.year}
              </Authors>
              <CountDescription>
                <ButtonCount onClick={handleCountMinus}>-</ButtonCount>
                <AmountCount>{book.amount}</AmountCount>
                <ButtonCount onClick={handleCountPlus}>+</ButtonCount>
              </CountDescription>
            </Description>
            <CostPrice>
              {book.price === "$0.00"
                ? "free"
                : `${(Number(book.price.slice(1)) * book.amount).toFixed(2)} $`}
            </CostPrice>
            <ButtonRemoveIcon onClick={handleDeleteBook} />
          </>
        )}
        {width < 769 && (
          <>
            <Link to={`/react-bookstore/book/${book.isbn13}`}>
              <Image src={book.image} alt={book.title} />
            </Link>
            <Description>
              <Title>{book.title}</Title>
              <Authors>
                {book.authors}, {book.year}
              </Authors>
              <CountAndCostDescription>
                <CountDescription>
                  <ButtonCount onClick={handleCountMinus}>-</ButtonCount>
                  <AmountCount>{book.amount}</AmountCount>
                  <ButtonCount onClick={handleCountPlus}>+</ButtonCount>
                </CountDescription>
                <CostPrice>
                  {book.price === "$0.00"
                    ? "free"
                    : `${(Number(book.price.slice(1)) * book.amount).toFixed(2)} $`}
                </CostPrice>
              </CountAndCostDescription>
            </Description>
            <ButtonRemoveIcon onClick={handleDeleteBook} />
          </>
        )}
      </StyledCartTotal>
      <SeparatorLine />
    </>
  );
};
