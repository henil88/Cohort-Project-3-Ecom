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