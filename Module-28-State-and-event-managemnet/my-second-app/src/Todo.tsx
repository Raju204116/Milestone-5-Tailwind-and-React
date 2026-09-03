import { useEffect, useState } from "react"
import TodoCard from "./TodoCard";

export default function Todo(){
    const [todos, setTodos]= useState([]) 
     
     //useState manages changing data.
    // useEffect performs side effects.
    // They are often used together, but one does not require the other.

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then (response =>response.json())
        .then (data=>{
            console.log(data);
            setTodos(data)
            
        })
    },[]);

    return (
        <div>
            <p>----------------------------------</p>
            <h2>No of Todos: {todos.length}</h2>
            {
                todos.map(todo=><TodoCard todo={todo}></TodoCard>)
            }

        </div>
    )
}