import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import  axios from 'axios'

const initialState={
    loading:false,
    users:[],
    err:""
}

// Genrated pending,fulfilled and rejected action type
export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.data)
})

const usersSlice=createSlice({
    name:"user",
    initialState,
   extraReducers:(builder)=>{ 
    builder.addCase(fetchUsers.pending,state=>{
        state.loading=true
    })

    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.loading=false,
        state.users=action.payload, 
        state.err=''
    })

    builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.loading=false,
        state.users=[]
        state.err=action.error.message
    })
   }
})

export default usersSlice.reducer