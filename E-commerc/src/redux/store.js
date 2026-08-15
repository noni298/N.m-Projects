import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slices/cartSlice'
export const store=configureStore({
    reducer:{
        cart:cartReduser
    }
})