import React, { useEffect, useState } from 'react';
import FetchTodosComponent from './FetchTodosComponent';

const FetchTodos = () => {

    const [todos, setTodos] = useState([]);
    console.log(todos);

    useEffect(()=>{
        const fetchTodos = async() =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const todos = await response.json();
                setTodos(todos)

            }catch(error){
                console.log(error);
            }
        }
        fetchTodos();
    })
    return (
        <div>
            {
                todos.map(todos=> (
                    <FetchTodosComponent todos={todos} key={todos.id}/>
                ))
            }
        </div>
    );
};

export default FetchTodos;