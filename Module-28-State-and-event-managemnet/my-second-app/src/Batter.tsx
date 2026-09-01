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