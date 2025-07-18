import axios from "../api/apiconfig"
import { loaduser, removeuser } from "../reducer/userSlice";

export const registerUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user);
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


export const loginUser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`users?email=${user.email}&password=${user.password}`)
        if (!data || data.length === 0) {
            console.log("User not found");
            return false
        }
        localStorage.setItem("user", JSON.stringify(data[0]))
        return true

    } catch (error) {
        console.log("error")
    }
}

export const logOut = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user")
        dispatch(removeuser())
    } catch (error) {
        console.log(error)
    }
}

export const currentUser = (user) => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) dispatch(loaduser(user))
        else console.log("user not logged it")
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/" + id, user)
        localStorage.setItem("user", JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}