import { configureStore } from "@reduxjs/toolkit";

import Slice from "./Reducer";

const Store = configureStore({
    reducer:{
        counter: Slice

    }
})


export default Store