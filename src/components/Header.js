import React from 'react'
import "./Header.css"
export default function Header() {
    return (
        <div className="header">
            <h1 className="title">Be Produc</h1>
            <h3 className="sub-title">A To-Do App</h3>
            <div className="second-header">
                <input className="todo-box" name="todo" type="text" placeholder="Your To-Do" />
                <button className="submit-btn" type="submit">Add</button>
            </div>
        </div>
    )
}
