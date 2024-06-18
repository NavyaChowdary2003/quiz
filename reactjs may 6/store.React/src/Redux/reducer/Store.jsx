import { createStore,applyMiddleware } from "redux";
import  {thunk} from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducer } from "./Index";

const Thunk = [thunk]

const Store = createStore(

    Reducer,
    
    composeWithDevTools(applyMiddleware(...Thunk))


)
    
export default Store;