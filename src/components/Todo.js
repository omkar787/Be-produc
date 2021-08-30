import React from 'react'
import "./Todo.css"

export default function Todo() {
    return (
        <div className="todo-item">
            <input className="checkbox" type="checkbox" checked="false"/>
            <h4 className="todo-text">lorem ipsum</h4>
        </div>
    )
}
