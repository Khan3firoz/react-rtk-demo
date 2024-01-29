import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axios } from 'axios'

const initialState={
    loading:false,
    users:[],
    err:""
}

// Genrated pending,fulfilled and rejected action type
const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.data.map((user)=>user.id))
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
        state.err=action.payload
    })
   }
})

export default usersSlice.reducer
const _fetchUsers = fetchUsers
export { _fetchUsers as fetchUsers }