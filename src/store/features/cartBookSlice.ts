import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookCartAPI, IBookDetailsApi } from "services";
import { ICartStore } from "types";

const initialState: ICartStore = {
  cartItems: [],
  total: null,
  isLoading: true,
  sum: null,
};

const cartBookSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<IBookCartAPI>) => {
      state.cartItems = [
        { ...payload },
        ...state.cartItems.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },

    deleteCart: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.cartItems = state.cartItems.filter((item) => item.isbn13 !== payload.isbn13);
    },

    incrementAmount: (state, { payload }: PayloadAction<IBookCartAPI>) => {
      const cartItems = state.cartItems.find((item) => item.isbn13 === payload.isbn13);

      if (cartItems) {
        cartItems.amount = cartItems.amount + 1;
      }
    },

    decrementAmount: (state, { payload }: PayloadAction<IBookCartAPI>) => {
      const cartItems = state.cartItems.find((item) => item.isbn13 === payload.isbn13);

      if (cartItems) {
        cartItems.amount = cartItems.amount - 1;
      }
    },
  },
});
export const { setCart, deleteCart, incrementAmount, decrementAmount } = cartBookSlice.actions;

export default cartBookSlice.reducer;
