import axios from "../api/apiconfig"
import { loaduser } from "../reducer/userSlice";

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
        localStorage.setItem("user", JSON.stringify(data[0]))

    } catch (error) {
        console.log("error")
    }
}

export const logOut = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user")
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