import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slices/productsSlice"
import userReducer from "./slices/userSlice"
let store = configureStore({
    reducer: {
        products: productsReducer,
        user:userReducer,
    }
})
export default store