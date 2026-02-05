import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

  
 export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",async(data,{rejectWithValue})=>{
        try {
             const res = await axios.get("https://dummyjson.com/products")
            const result = await res.data.products
            return result
        } catch (error) {
              return rejectWithValue(error)
        }
    }
 )


 const productSlice= createSlice({
    name:"products",
    initialState:{
        list: [],
    },
    reducers:{
        addProduct:(state , action)=>{
            state.list.unshift(action.payload)
        },
        deleteProduct:(state , action)=>{
             state.list = state.list.filter(
        (item) => item.id !== action.payload
      );
        },
        setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
    updateProduct: (state, action) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.editProduct = null;
    },
    },   
    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    }
 })
  export const {addProduct, deleteProduct ,setEditProduct ,updateProduct } =productSlice.actions;
  export default  productSlice.reducer