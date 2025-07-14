import axios from '../api/apiconfig'
import { loadproduct } from '../reducer/productSlice';


export const asyncLoadProduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadproduct(data))
    } catch (error) {
        console.log(error)
    }
}

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncLoadProduct())

    } catch (error) {
        console.log(error)
    }
}

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
    try {
        await axios.patch("/products/" + id, product)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/products/" + id)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}