//import logo from './logo.svg';
import React from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { fetchTodos } from './Components/ToDo_API/todo_slice' 
import Todo from './Components/todo'

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className='App'>
    <button className='button-div' onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
        <Todo />
    </div>
  )
}

export default App
