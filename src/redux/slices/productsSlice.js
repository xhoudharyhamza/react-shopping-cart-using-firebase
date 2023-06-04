import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  loading: false,
  cart: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
};
let setProductsToLocalStorage=(cart)=>{
  localStorage.setItem("cart", JSON.stringify(cart))
}
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    addProductsToCart(state, action) {
      let cartProduct = state.products.find((product) => {
        return product.id === action.payload;
      });
      state.cart.push({ ...cartProduct, quantity: 1 });
      setProductsToLocalStorage(state.cart)
    },
    deleteProductFromCart(state, action) {
      let cartProducts = state.cart.filter((products, index) => {
        return index != action.payload
      })
      state.cart = cartProducts
      setProductsToLocalStorage(state.cart)
    }
  },
});

export const { setProducts, setError, setLoading, addProductsToCart, deleteProductFromCart } = productsSlice.actions;
export default productsSlice.reducer;
