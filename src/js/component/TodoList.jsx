import React from "react";

export const TodoList = (props) => {
    return (
        <ul>
            {props.todoList.map((item, index) => (
                <li key = {index}>
                    {item.label} 
                    <button onClick = {() => props.deleteItem (index)}>X</button>
                </li> 
            ))}
        </ul>
    )
}

