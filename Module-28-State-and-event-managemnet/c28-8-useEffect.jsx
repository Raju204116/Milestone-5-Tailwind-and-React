
/* 
=>see Todo.tsx, TodoCard.tsx



✅✅✅useEffect in React
useEffect is a React Hook used to perform side effects after React renders a component.




➡️ What is a side effect?
A side effect is something your component does outside of simply calculating UI.

Common examples:
Fetching API data
Changing the document title
Setting up a timer
Adding/removing an event listener
Working with browser APIs


➡️ Basic syntax
import { useEffect } from "react";

useEffect(() => {
  // side effect code
},[]);


=>📌📌useEffect has two parametes: The first one is a function ()=>, and the second one is a dependency array []
-the dependency array controls when the effect runs.

➡️Comparision of with dependency and without dependency:

| Code                           | When does effect run?     |
| ------------------------------ | ------------------------- |
| `useEffect(() => {})`          | After every render        |
| `useEffect(() => {}, [])`      | Once after initial render |
| `useEffect(() => {}, [count])` | When `count` changes      |



✅✅App.tsx
    <Todo></Todo>

✅✅Todo.tsx

import { useEffect, useState } from "react"
import TodoCard from "./TodoCard";

export default function Todo(){
    const [todos, setTodos]= useState([])

    //useState manages changing data.
    // useEffect performs side effects.
    //⚠️They are often used together, but one does not require the other.

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



✅✅TodoCard.tsx

export default function TodoCard({todo}){

    return(
        <div>
            <h2>Title:{todo.title}</h2>
            <p> isCompleted: {todo.completed ? "Yes" : "No"}</p>
            
           
        </div>
    )
}






*/