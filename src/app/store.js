import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import iceCreameReducer from '../features/iceCreame/iceCreameSlice'
import userReducer from '../features/users/userSlice'

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCreame:iceCreameReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store