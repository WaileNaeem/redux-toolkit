import {configureStore} from '@reduxjs/toolkit'
import  userSlice  from './slices/userSlice'
import productReducer from './slices/ProductSlice'
import CartReducer from './slices/CartSlice'

const store=configureStore({
    reducer:{
        users:userSlice,
        product:productReducer,
        cart:CartReducer
    }
})

export default store