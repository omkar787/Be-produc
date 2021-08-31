import React from 'react'
import "./Todos.css"
import Todo from './Todo'

export default function Todos({ todosList, settodosList }) {
    return (
        <div className="todo-container">
            {
                todosList !== undefined ? (todosList.map((todo) => {
                    return <Todo todosList={todosList} settodosList={settodosList} key={todo.id} todo={todo}  />
                })):console.log("")
            }
            
        </div>
    )
}
