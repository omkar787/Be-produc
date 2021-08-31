import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header"


function App() {
  const [todosList, settodosList] = useState(localStorage.getItem("todos-list")?(JSON.parse(localStorage.getItem('todos-list'))):[])
  function populate(){
    localStorage.setItem('todos-list',JSON.stringify(todosList))
  }
 
 useEffect(() => {
   populate()
 }, [])
  return (
    <div className="app">
      <Header todosList={todosList} settodosList={settodosList} />
    </div>
  );
}

export default App;
