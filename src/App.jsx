import React, { useState } from 'react'
import './App.css'


export const App = () => {

  const [todo,SetTodo]=useState('')
  const[todos,SetTodos]=useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const adddata = () =>{
    SetTodos([...todos,todo])
    console.log(todos)
  }



  return (
    <div>
      <div className='container'>

         <h1 id='h1'>To-do List</h1>

         <form onSubmit={handleSubmit}>
          <input type='text' value={todo} className='in1' placeholder='Add here' onChange={(event)=>SetTodo(event.target.value)} ></input>
          <button className='btn' onClick={adddata}> New</button>

         </form>
        <div>
        <ul>
              {
                todos.map((to)=>{
                  <li>{to}</li>
                })
              }
              
        </ul>
        </div>
      </div>

    </div>
  )
}

export default App