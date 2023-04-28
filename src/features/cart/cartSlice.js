import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
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
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;