import React from 'react'
import {useState} from 'react'

export default function CreateTodo() {

  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value)
  }
  
    const inputStyle = {
        padding: 10,
        margin: 10
    }

  return (
    <div>
      <input type="text" id="title" style={inputStyle} value={title} onChange={titleChangeHandler} placeholder='title' /> <br />
      <input type="text" id="description" style={inputStyle} value={description} onChange={descriptionChangeHandler} placeholder='description' /> <br />
      <button style={inputStyle} onClick={() => {
        //You can use axios for better  
        fetch("http://localhost:3000/todo",{
          method: "POST",
          body: JSON.stringify({
            title : title ,
            description : description,
            completed: false
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(async function (res){
            const json = await res.json();
            console.log("title: " + title + "    description: " + description)
            alert("Todo created");
            props.setSetTodos([...todos,{
              title,
              description
            }])
          })
      }}>Add a Todo</button>
    </div>
  )
}
