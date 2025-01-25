import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from '../components/CreateTodo'
import Todos from '../components/Todos'

//Render network for backend deployment
//Vercel for frontend deployment

function App() {
  const [todos, setTodos] = useState([])

  // fetch("http://localhost:3000/todo")
  //   .then( async function (res){
  //     const json = await res.json();
  //     setTodos(json.todos)
  //   }) 
    //Above is the wrong way as it will hit infinite request

  return (
    <>
     <CreateTodo setTodos={setTodos}></CreateTodo>
     <Todos todos={todos}></Todos>
    </>
  )
}

export default App
