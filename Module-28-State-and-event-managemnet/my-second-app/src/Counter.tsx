import { useState } from "react"

export default function Counter(){

    const [count,setCount] =useState(0)
    // useState is a special React Component (import { useState } from "react"), 
    // It can destructure two values :
    // [first is initial value named count, second is a state changing function named setState]
    const handleSetCount =()=>{
            setCount(count+1);
    }

    return (
            <div>
                <p>----------------------------</p>
                <h2>Counter</h2>
                <p>Current Value:{count}</p>
                <button onClick={handleSetCount} >Increase</button>
            </div>
        )
}