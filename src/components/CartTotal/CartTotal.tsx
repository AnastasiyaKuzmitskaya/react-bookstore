import { useEffect, useState } from "react";
import { getCart, useAppSelector } from "store";
import {
  InfoContainer,
  InfoTitle,
  InfoValue,
  StyledTotalCard,
  SubmitButton,
  TitleTotal,
  ValueTotal,
} from "./styles";

export const CartTotal = () => {
  const { cartItems } = useAppSelector(getCart);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let totalAmount = 0.0;
    cartItems.forEach((book) => {
      totalAmount += Number(+book.amount) * +book.price.slice(1);
    });
    setTotal(totalAmount);
  }, [cartItems]);
  const vat = (total * 0.2 * 100) / 100;
  const totalPrice = total + vat;

  return (
    <StyledTotalCard>
      <InfoContainer>
        <InfoTitle>Sum total</InfoTitle>
        <InfoValue>${+total.toFixed(2)}</InfoValue>

        <InfoTitle>Vat</InfoTitle>
        <InfoValue>${+vat.toFixed(2)}</InfoValue>

        <TitleTotal>Total: </TitleTotal>
        <ValueTotal> ${+totalPrice.toFixed(2)}</ValueTotal>
      </InfoContainer>

      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledTotalCard>
  );
};
