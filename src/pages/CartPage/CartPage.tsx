import { ArrowBack, CardShopItem, Title } from "components";
import { getCart, useAppSelector } from "store";
import { CartList, NothingCartShop, StyledCartPage } from "./styles";

export const CartPage = () => {
  const { cartItems } = useAppSelector(getCart);

  return (
    <StyledCartPage>
      <ArrowBack />
      <Title title="Your cart" />
      {cartItems.length > 0 ? (
        <CartList>
          {cartItems.map((book) => (
            <CardShopItem book={book} />
          ))}
        </CartList>
      ) : (
        <NothingCartShop>You don't have books in cart</NothingCartShop>
      )}
    </StyledCartPage>
  );
};
