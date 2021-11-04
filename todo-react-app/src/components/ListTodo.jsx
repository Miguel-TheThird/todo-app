// TODO
import React from "react";

const ListTodo = (props) => {

    const completeHandler = () => {
        props.setTodos(props.todos.map((item) => {
            if (item.id === props.todo.id) {
                return {
                    ...item, //Copy properties from exisiting item/todo
                    completed: !item.completed, //Only modify the completed property
                };
            }
            return item; //If it doesnt match, just return the same element 
        }))
    };

    const deleteHandler = () => {
        props.setTodos(props.todos.filter((item) => item.id !== props.todo.id));
        console.log("This todo was deleted", props.todos)
    };

    return (
        <div className='todo'>
            <li className={`todo-item ${props.todo.completed ? "completed" : ''}`}> {props.text}</li> {/* Update UI CSS based of state */}

            <button onClick={completeHandler} className="buttons">Completed</button>

            <button onClick={deleteHandler} className="buttons">Delete</button>
        </div>

    )
}

export default ListTodo;