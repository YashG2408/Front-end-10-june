import React from 'react'
import { useDispatch } from 'react-redux'
import { zero } from './countSlice'

function Counter() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Counter