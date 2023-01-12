import { ArrowBack, CartList, Title } from "components";
import { getCart, useAppSelector } from "store";
import { StyledCartPage } from "./styles";

export const CartPage = () => {
  const { cartItems } = useAppSelector(getCart);

  return (
    <StyledCartPage>
      <ArrowBack />
      <Title title="Your cart" />
      <CartList /* book={cartItems} */ />
    </StyledCartPage>
  );
};
