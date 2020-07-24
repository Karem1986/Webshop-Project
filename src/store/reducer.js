// THIS IS THE ROOT REDUCER
import { combineReducers } from "redux";
import productFeed from "./feed/reducer";

const reducer = combineReducers({
    productFeed: productFeed
    // etc.
});

export default reducer;