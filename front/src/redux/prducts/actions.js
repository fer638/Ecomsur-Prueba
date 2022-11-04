import {products} from "../../api/productos" 
import { GET_PRODUCTS } from "./types";
export const setProducts = (products) => ({
    type: GET_PRODUCTS,
    payload: products,
    });
export const getProducts = () => {
    return async (dispatch) => {
    try {

        const data = await products();
        dispatch(setProducts(data))
    } catch ({ message }) {
        console.log(message);
    }
    };
};