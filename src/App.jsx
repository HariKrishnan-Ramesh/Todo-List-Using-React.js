import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

export const App = () => {

  const [todo, setTodo] = useState('');
  const [todos, SetTodos] = useState([]);
  const [edit,setEdit] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const addData = () => {
   if(todo !== ''){
    SetTodos([...todos,{ list: todo , id : Date.now(), status : false}]);
    console.log(todos);
    setTodo('');
   }
   if(edit){
   const editodo = todos.find((todo)=>todo.id == edit)
   const updatetodo = todos.map((to)=>to.id === editodo.id
   ? (to = {id : to.id , list : todo} )
   : (to = {id: to.id, list : to.list}))
   SetTodos(updatetodo)
   setEdit(0)
   setTodo('')
   }
  }

  const todoRef = useRef('null')

  useEffect(() => {
    todoRef.current.focus();
  })

  const onDelete = (id) => {
    SetTodos(todos.filter((to)=>to.id !== id))
  }

  const onDone = (id) => {
    let complete = todos.map((list)=>{
      if(list.id === id){
        return({...list , status :!list.status } )
      }
      return list
    })
    SetTodos(complete)
  }

  const onEdit = (id) => {
    const editodo = todos.find((to)=> to.id === id)
    setTodo(editodo.list)
    setEdit(editodo.id)
  }

  return (
    <div>
      <div className='container'>

        <h1 id='h1'>To-do List</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' value={todo} className='in1' ref={todoRef} placeholder='Add here' onChange={(event) => setTodo(event.target.value)} ></input>
          <button className='btn' onClick={addData}>{edit ? 'EDIT' : 'ADD'}</button>

        </form>
        <div>
          <ul>
            {
              todos.map((to) => (
                <li className='li'><div className='lit' id={to.status ? 'lt' : ' ' } >{to.list}</div>
                  <MdModeEdit className='icons' id='edit' title='Edit' onClick={()=>onEdit(to.id)}/>
                  <MdDelete className='icons' id='del' title='Delete' onClick={()=>onDelete(to.id)}/>
                  <IoMdDoneAll className='icons' id='done' title='Done' onClick={()=>onDone(to.id)}/>
                </li>

              ))
            }

          </ul>
        </div>
      </div>

    </div>
  )
}

export default App