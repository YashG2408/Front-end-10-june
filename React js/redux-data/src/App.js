import React from 'react'
import Count from './features/Counter/Count'
import Counter from './features/Counter/Counter'
import Todolist from './features/Todo/Todolist'
import AddTodo from './features/Todo/AddTodo'

function App() {
  return (
    <div>
      <h1>Hello This Is Redux Data</h1>

      {/* <Count /> */}
      {/* <Counter /> */}
      <Todolist />
      <AddTodo />
    </div>
  )
}

export default App