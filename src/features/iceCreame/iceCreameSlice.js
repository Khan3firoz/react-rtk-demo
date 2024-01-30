import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';
const initialState = {
    numberOfIceCream: 20
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCream--;
        },
        restocked: (state, action) => {
            state.numberOfIceCream += action.payload || 0; // Default value as 0
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(cakeOrdered, (state) => {
            state.numberOfIceCream--
        })
        // ['cake/ordered']:(builder)=>{
        //     state.numberOfIceCream--
        // }
    }
});

export default iceCreamSlice.reducer;
export const {ordered,restocked} = iceCreamSlice.actions;
