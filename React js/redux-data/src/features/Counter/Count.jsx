import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './countSlice';

function Count() {

    const count = useSelector((data)=>data.counter.value)
    console.log(count);

    const dispatch = useDispatch()
    
  return (
    <div>

        <h1>Hello Counter :{count}</h1>

        <button className='btn btn-primary' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='btn btn-success' onClick={()=>dispatch(decrement())}>Decrement</button>

        
    </div>
  )
}

export default Count