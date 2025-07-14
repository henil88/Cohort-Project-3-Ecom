import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    userData: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, actions) => {
            state.userData = actions.payload
        },
        removeuser: (state, actions) => {
            state.userData = null
        }
    }

})

export const { loaduser, removeuser } = userSlice.actions
export default userSlice.reducer