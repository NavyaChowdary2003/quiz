import { combineReducers } from "redux";

import { selectProductreducer, setProductreducer } from "./Productreducer";



export const Reducer = combineReducers({
    Allproducts : setProductreducer,
    selectProduct : selectProductreducer
})