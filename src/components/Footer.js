import React,{useState, useContext} from 'react'
import {DataContext} from './DataProvider'
import {Delete} from '@material-ui/icons'
export default function Footer() {
  const[checkAll, setCheckAll] = useState(false)
  const[todos,setTodos] = useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo = () =>{
    const newTodos = todos.filter(todo => {
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }

  return (
    <div className="row">
    <label htmlFor="all">
      <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll}/>
      ALL
    </label>
    <p>You have {todos.filter(todo => todo.complete === false).length} todo </p>
    <button className="delete" onClick={deleteTodo}><Delete fontSize="medium"/></button>
  </div>
  )
}
