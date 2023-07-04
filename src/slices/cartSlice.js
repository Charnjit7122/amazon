import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cartSlice = createSlice({
  name: "cart",
  initialState: Cookies.get("cartItems")
    ? JSON.parse(Cookies.get("cartItems"))
    : [],

  reducers: {
    addToCart: (state, action) => {
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index >= 0) {
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      Cookies.set("cartItems", JSON.stringify(state));
    },

    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity++;
      Cookies.set("cartItems", JSON.stringify(state));
    },

    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        const index = state.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        state.splice(index, 1);
      } else {
        item.quantity--;
        Cookies.set("cartItems", JSON.stringify(state));
      }
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        console.log("can not remove product because it is not in the cart");
      }
      Cookies.set("cartItems", JSON.stringify(state));
    },
  },
});

export const selectItems = (state) => state.cart;
export const totalCartPrice = (state) =>
  state.cart.reduce(
    (total, item) => Math.round(total + item.quantity * item.price),
    0
  );
export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
