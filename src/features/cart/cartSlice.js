import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.products.findIndex(
        (i) => i.productID === action.payload.productID
      );
      if (index === -1) {
        let products = action.payload;
        products.cartQuantity = 1;
        state.products.push(products);
      } else {
        const newItems = state.products;
        newItems[index].cartQuantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const newItems = state.products.filter(
        (item) => item.productID !== action.payload
      );

      state.products = newItems;
    },
    editCartQuantity: (state, action) => {
      const index = state.products.findIndex(
        (i) => i.productID === action.payload.id
      );
      const items = state.products;
      if (action.payload.status === "increase") {
        items[index].cartQuantity += 1;
      } else if (action.payload.status === "decrease") {
        items[index].cartQuantity -= 1;
      }
    },
    addToWishlist: (state, action) => {
      // const wishListIndex = state.wishlist.findIndex(
      //   (i) => i.productID === action.payload.productID
      // );
      // const productIndex = state.products.findIndex(
      //   (i) => i.productID === action.payload.productID
      // );
      // const items = state.products;
      // if (wishListIndex === -1) {
      //   state.wishlist.push(action.payload);
      //   items[productIndex].wishlisted = true;
      // }
      state.wishlist.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, editCartQuantity, addToWishlist } =
  cartSlice.actions;
