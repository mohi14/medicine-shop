import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  wishlist: [],
  viewProduct: {},
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
        let product = { ...action.payload, cartQuantity: 1 };
        state.products.push(product);
        localStorage.setItem("vicodinCart", JSON.stringify(state));
      } else {
        const newItems = state.products;
        newItems[index].cartQuantity += 1;
        localStorage.setItem("vicodinCart", JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      const newItems = state.products.filter(
        (item) => item.productID !== action.payload
      );

      state.products = newItems;
      localStorage.setItem("vicodinCart", JSON.stringify(state));
    },
    editCartQuantity: (state, action) => {
      const index = state.products.findIndex(
        (i) => i.productID === action.payload.id
      );
      const items = state.products;
      if (action.payload.status === "increase") {
        items[index].cartQuantity += 1;
        localStorage.setItem("vicodinCart", JSON.stringify(state));
      } else if (action.payload.status === "decrease") {
        items[index].cartQuantity -= 1;
        localStorage.setItem("vicodinCart", JSON.stringify(state));
      }
    },
    addToWishlist: (state, action) => {
      const index = state.wishlist.findIndex(
        (i) => i.productID === action.payload.productID
      );
      if (index === -1) {
        state.wishlist.push(action.payload);
        localStorage.setItem("vicodinCart", JSON.stringify(state));
      }
    },
    removeFromWishlist: (state, action) => {
      const newProducts = state.wishlist.filter(
        (i) => i.productID !== action.payload
      );
      state.wishlist = newProducts;
      localStorage.setItem("vicodinCart", JSON.stringify(state));
    },
    showViewProduct: (state, action) => {
      state.viewProduct = action.payload;
      localStorage.setItem("vicodinCart", JSON.stringify(state));
    },
    loadProducts: (state, action) => {
      state.products = action.payload.products;
      state.wishlist = action.payload.wishlist;
      state.viewProduct = action.payload.viewProduct;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  editCartQuantity,
  addToWishlist,
  removeFromWishlist,
  showViewProduct,
  loadProducts,
} = cartSlice.actions;
