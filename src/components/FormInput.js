import React,{useState,useContext} from 'react'
import {DataContext} from './DataProvider'
import {AddCircle} from '@material-ui/icons'

function FormInput() {

  const[todos, setTodos] = useContext(DataContext);
  const[todoName, setTodoName] = useState('');

  const addTodo = e =>{
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete:false}])
    setTodoName('');
  }


  return (
    <form autocomplete="off" onSubmit={addTodo}>
    <input type="text" name="todos" id="todos" required placeholder="What would you like to add"
     value={todoName}
      onChange={e=>setTodoName(e.target.value.toLowerCase())} />
      
    <button type="submit"><AddCircle fontSize="large"/></button>
  </form>
  )
}

export default FormInput