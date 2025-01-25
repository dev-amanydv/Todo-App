import React from 'react'

export default function Todos({todos,setTodos}) {
  return (
    <div>
      {todos.map((todo)=>{
        return <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            <button>{todo.completed == true ? "completed": "Mark as Done"}</button>
        </div>
      })}
    </div>
  )
}
