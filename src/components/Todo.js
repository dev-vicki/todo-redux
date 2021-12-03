import React,{useState} from 'react'
import "./Todo.css"
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Todo = ({toggleTodo, task, completed, id, removeTodo}) => {
    return (
        <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
            <CSSTransition key="normal" timeout={500} classNames="task-text">
            <li className="Todo-task" onClick={toggleTodo}>
                {task}
            </li>
            </CSSTransition>
            <div className="Todo-buttons">
                <button onClick={removeTodo}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </TransitionGroup>
    )
}

export default Todo
