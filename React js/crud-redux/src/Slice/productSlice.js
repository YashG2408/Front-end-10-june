import { createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import axios from "axios";


//read 
export const readdata = createAsyncThunk(
    'readdata', async(data,{rejectedWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/products")
            const result = await res.data;
            return result;
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
)

//create

export const createdata = createAsyncThunk(
    'createdata', async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/products",data)
            const result = await res.data;
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const productSlice = createSlice({
    name : "Products",
    initialState : {
        loading : false,
        products : [],
        error : ""
    },

    reducers : {
        ProductPending : (state,action)=>{
            state.loading = true;
        },
        ProductFullfield : (state,action)=>{
            state.loading = false
            state.products.push(action.payload)
        },
        ProductError : (state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    },
    extraReducers :(builder)=>{
        builder
        .addCase(readdata.pending,(state, action)=>{
            state.loading = true;
        })
        .addCase(readdata.fulfilled,(state, action)=>{
            state.loading = false,
            state.products = action.payload
        })
        .addCase(readdata.rejected,(state, action)=>{
            state.loading = false,
            state.error = action.payload
        })

        //create

          .addCase(createdata.pending,(state, action)=>{
            state.loading = true;
        })
        .addCase(createdata.fulfilled,(state, action)=>{
            state.products.push(action.payload)
            state.products = action.payload
        })
        .addCase(createdata.rejected,(state, action)=>{
            state.loading = false,
            state.error = action.payload
        })
    }
})

export const {ProductPending,ProductFullfield,ProductError} = productSlice.actions;
export default productSlice.reducer;