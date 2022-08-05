import React from "react";
import {Header} from "./Header.jsx";
import {TodoList} from "./TodoList.jsx";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState('');

	const [todoList, setTodoList] = useState([]);

	const addItem = () => {
		const newList = [...todoList]
		newList.push(inputValue)
		setTodoList(newList)
	}
	const deleteItem = (index) => {setTodoList(todoList.filter((item, i) => index != i))}

const getAllTodos = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/melissanohemi')
    .then((resp) => {
        if (!resp.ok){
            throw new Error(
                `${resp.status} - ${resp.statusText}`
            );
        }
        return resp.json();
    })
    .then((data) => {
         setTodoList([data[0].label]);
    })
}
const updateApi = (todos) => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/melissanohemi', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log("resp", resp);
        console.log("resp.ok", resp.ok); // will be true if the response is successfull
        console.log("resp.status", resp.status); // the status code = 200 or code = 400 etc.
        console.log("resp.text", resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log("data", data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
	}
    useEffect(() =>{
        getAllTodos();

    },[]) 
	return (
		<div className="Home">
			<Header />
			<input type ="text" onChange={e => setInputValue(e.target.value)} value = {inputValue}/>
			<button onClick={addItem}></button>
			<TodoList todoList={todoList} deleteItem={deleteItem}/>

		</div>
	);
};

export default Home;