import React from 'react'
import "./Todo.css"

export default function Todo({ todo, title, completed, todosList, settodosList }) {
    function onChangeHandle(e){
        console.log(e.target.checked);
        todo.completed = !todo.completed
        localStorage.setItem("todos-list",JSON.stringify(todosList))
    }
    return (
        <div className="todo-item">
            <input  onChange={onChangeHandle} className="checkbox" type="checkbox" defaultChecked={todo.completed} />
            <h4 className="todo-text">{todo.title}</h4>
        </div>
    )
}
