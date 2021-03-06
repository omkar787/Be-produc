import React, { useEffect, useRef } from 'react'
import "./Header.css"
import Todos from './Todos'
import Footer from './Footer'
import { v4 as uuidv4 } from "uuid"

export default function Header({ todosList, settodosList }) {
    const todoText = useRef("")

    function onClearHandle(e) {
        if (todosList.length !== 0) {
            const temp = todosList.filter((item) => {
                if (item.completed) {
                    return false
                } else {
                    return true
                }
            })
            settodosList(temp)
        }

    }
    function onSubmitHandle(e) {
        const text = todoText.current.value
        if (text !== "") {
            const temp = {
                id: uuidv4(),
                title: text,
                completed: false
            }
            const arr = [...todosList, temp]
            settodosList(arr)
            todoText.current.value = ""

        }

    }

    function handleKeyPress(e){
        if(e.key === "Enter"){
            onSubmitHandle()
        }
    }

    useEffect(() => {
        if (todosList) {
            localStorage.setItem('todos-list', JSON.stringify(todosList))
        }

        return () => {
            <Todos todosList={todosList} settodosList={settodosList} />
        }
    }, [todosList, settodosList])

    return (
        <div className="header">
            <h1 className="title">Be Produc</h1>
            <h3 className="sub-title">A To-Do App</h3>
            <div className="second-header">
                <input onKeyPress={handleKeyPress} ref={todoText} className="todo-box" name="todo" type="text" placeholder="Your To-Do" required />
                <button onClick={onSubmitHandle} className="submit-btn" type="submit">Add</button>
                <button onClick={onClearHandle} className="submit-btn clear-btn" >Clear</button>
            </div>

            <Todos todosList={todosList} settodosList={settodosList} />
            <Footer />
        </div>
        

    )
}
