import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './authSlice'

const store = configureStore({
    reducer:{
        authentication : AuthReducer
    }
})

export default store