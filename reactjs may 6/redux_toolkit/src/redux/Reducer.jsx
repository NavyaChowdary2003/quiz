import { createSlice } from "@reduxjs/toolkit";

const initialValue ={

    count:0
}



const Slice = createSlice({
    name:"counter",
    initialState: initialValue,
    reducers:{

        increment : (state)=>{
             state.count ++
        },

     decrement : (state)=>{
        state.count --
     },
     incrementbyvalue:(state,{type,payload})=>{
        state.count += payload
     }


    }
})

export const{increment,decrement,incrementbyvalue}=Slice.actions

export default Slice.reducer;