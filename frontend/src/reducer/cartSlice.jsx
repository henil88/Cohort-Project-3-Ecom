import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: []
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.cartData = action.payload
        }
    }
})


export default cartSlice.reducer
export const { loadcart } = cartSlice.actions