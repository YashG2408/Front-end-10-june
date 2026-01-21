import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        todo : ["Yash","Parth"]
    }

export const todoSlice = createSlice({
    name : "Todos",
    initialState,
    reducers:{
        AddData : (state,action)=>{
            state.todo.push(action.payload)
        },
        DeleteTodo : (state,action)=>{
            state.todo = state.todo.filter((data,index)=>index !== action.payload)
        },
        EditTodo : (state,action)=>{
         state.todo
        }
    }
})

export const {AddData,DeleteTodo,EditTodo} = todoSlice.actions

export default todoSlice.reducer