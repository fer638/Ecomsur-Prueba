import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import productsReducer from "./prducts/reducer";

const rootReducer = combineReducers({productos:productsReducer});
const store = createStore(rootReducer, compose(applyMiddleware(thunk))); 


export default store;