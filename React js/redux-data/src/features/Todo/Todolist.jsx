import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {DeleteTodo, EditTodo}  from './todoSlice';

function Todolist() {

    const {todo} = useSelector((data)=>data.todos)
    console.log(todo);

    const dispatch = useDispatch()
    
  return (
    <div>

      <ul>
        {
          todo.map((data,index)=>{
            return(
              <li key={index}>{data}
                <button onClick={()=>dispatch(EditTodo(index,data))}>Edit</button>
                <button onClick={()=>dispatch(DeleteTodo(index))}>Delete</button>

              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default Todolist