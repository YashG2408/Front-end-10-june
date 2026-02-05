import { configureStore } from "@reduxjs/toolkit";
import  loginUser  from "../features/loginSlice";
import  fetchProducts  from "../features/productSlice";



export const store = configureStore({
    reducer:{
       auth: loginUser,
       products:fetchProducts
    }
})