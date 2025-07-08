import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../reducer/cartSlice"
import cartSlice  from "../reducer/cartSlice"
import productSlice from "../reducer/productSlice"

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        cartReducer: cartSlice,
        productReducer: productSlice,
    }
})