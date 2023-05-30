import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slices/productsSlice"
let store = configureStore({
    reducer: {
        products: productsReducer
    }
})
export default store