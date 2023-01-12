import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookCartAPI, IBookDetailsApi } from "services";
import { ICartStore } from "types";

const initialState: ICartStore = {
  cartItems: [],
  total: null,
  isLoading: true,
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
  },
});
export const { setCart, deleteCart } = cartBookSlice.actions;

export default cartBookSlice.reducer;
