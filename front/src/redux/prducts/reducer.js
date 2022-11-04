import { GET_PRODUCTS } from "./types";

const intialState = {allProducts:[], loading:false} 
const reducer = (state=intialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            const { payload } = action;
            return { ...state, allProducts: payload };  
            
        default:
            return state;
    }
};

export default reducer;