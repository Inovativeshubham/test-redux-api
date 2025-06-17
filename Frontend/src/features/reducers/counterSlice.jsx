import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        incrementBy1:(state)=>{
            state.value +=1
        },
        decrementBy1:(state)=>{
            state.value -=1
        },
        incrementByAmmount:(state, action)=>{
            state.value += Number(action.payload)
        },
    }
})

export const {incrementBy1, decrementBy1, incrementByAmmount} = counterSlice.actions;
export default counterSlice.reducer;