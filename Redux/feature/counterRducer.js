import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
    name:"counterSlice",
    initialState,
    reducers:{
        incrementByParameter: (state=initialState,action)=>{
            console.log(action.payload,"action")
            state += action.payload
            return state;
        },
        decrementByParameter: (state=initialState,action)=>{
            state -= action.payload
        }
    }
})

export default counterSlice.reducer;
export const {incrementByParameter, decrementByParameter} = counterSlice.actions