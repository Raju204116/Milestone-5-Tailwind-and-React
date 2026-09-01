/* 
=>See Cart.tsx, Counter.tsx, Batter.tsx

//c28-3
✅✅State in React
State is data that belongs to a component and can change over time. When state changes,
React re-renders the component and updates the UI.

=>Working flow : component =>state =>UI

📌📌Re-render : Re-render means React runs the component again (i.e Re-run) to calculate the updated UI.
    =>flow : state changes =>React Re-runs the component => New UI is calculated => Screen Updates


⚠️⚠️NB: If we code without using React state, then the function will work internally, but React will not
         the output in the UI/browser. (ex-cart.tsx & counter.tsx)



//c28-4
✅✅Hook in React
A Hook is a special React function that lets a functional component to use React features, such as state, 
context, and effects.

➡️Common React Hooks:

| Hook            | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `useState()`    | Manage component state                             |
| `useEffect()`   | Perform side effects                               |
| `useContext()`  | Access Context data                                |
| `useRef()`      | Keep a value/reference without causing a re-render |
| `useMemo()`     | Cache a calculated value                           |
| `useCallback()` | Cache a function                                   |
| `useReducer()`  | Manage more complex state                          |



📌📌useState()
        -useState is a React Hook which is a special React function.  (import { useState } from "react"), 
        -It can destructure two values :
        -[first is initial value named count, second is a state changing function named setState]

        -⭐The backend useState looks like this: (A function inside another function)

        functtion useState(initialValue){  
            let state = initialValue;   //0

            function setState(newUpdate){
                state=newUpdate;        //10
            } 

            function getState(){
                return state;           //10 -after updating 
            }

            return [getState, setState];   //returning an array of a value and a function.
        
        }
        console.log(useState(0)); // [0, function setState(newUpdate)]

        const [getCount, setCount] = createState(0);
        console.log(getCount()); // 0
        setCount(10);
        console.log(getCount()); // 10



//c28-3
➡️Cart.tsx
    // Though all the codes are correct, the counter will not work.
    // Because this code is for Normal Js, not for React. React uses a Special function named useState()
    //see Counter.tsx for solution

export default function Cart(){
    let counter =0;

    const handleAddToCart =()=>{
        counter=counter+1;
    }
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items in the cart: {counter}</p>
            <button onClick={handleAddToCart}> Add Item</button>
        </div>
    )
}



//c28-3-4
➡️Counter.tsx
   
import { useState } from "react"

export default function Counter(){

    const [count,setCount] =useState(0)
    
    const handleSetCount =()=>{
            setCount(count+1);
    }

    return (
            <div>
                <h2>Counter</h2>
                <p>Current Value:{count}</p>
                <button onClick={handleSetCount} >Increase</button>
            </div>
        )
}




//c28-4
➡️Batter.tsx

import { useState } from "react"

export default function Batter(){

    const [run,setRun] =useState(0);

    const handleSetRun1 =()=>{
        setRun(run+1);
    }

    const handleSetRun4 =()=>{
        setRun(run+4);
    }

    return (
        <div>
            <p>-------------------</p>
            <h2>Run: {run}</h2>
            <button onClick={handleSetRun1}>Add 1</button>
            <button onClick={handleSetRun4}>Add 4</button>
        </div>
    )
}





*/