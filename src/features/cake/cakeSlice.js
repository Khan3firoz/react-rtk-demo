import { createSlice } from '@reduxjs/toolkit'

const initialState={
    numberOfCake:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numberOfCake--
        },
        restocked:(state,action)=>{
            state.numberOfCake+=action.payload
        }
    }
})

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;