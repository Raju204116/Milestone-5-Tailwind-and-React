
/* =>see Task.tsx

✅✅What is Rendering ?
Rendering in React is the process of React calling a component to determine what UI should be displayed or updated.

⚠️Re-render does NOT mean React reloads the entire webpage.
React compares the new UI result with the previous one and updates the necessary parts of the DOM.

➡️When does React render?
React commonly renders when:
A component is initially displayed
State changes
Props change
A parent component renders, which can cause its children to render too


➡️For example:
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

Initially:
Count: 0

When you click the button:
setCount(1)
     ↓
React renders again
     ↓
Count: 1





✅✅What is Conditional Rendering ?
Conditional rendering is how a component decides what to display based on data, state, or user actions.

➡️We can do it in many ways. Using
    -If statement
    -Ternary 
    -Logical && , ||

➡️We can Hide a task by returning null.
    if(isDone){
        return null
    }





✅✅Task.tsx✅✅
interface propsType{
    name:string,
    isDone:boolean
}


export default function Task({name,isDone}:propsType){
    
    //➡️using If-else
    // if(isDone===true){
    //     return <li>Completed: {name}</li>
    // }
    // return <li>Pending:{name}</li>


    //➡️usign ternary ?:
    // return isDone===true ? <li>Completed- {name}</li> :  <li>Pending:{name}</li> ;


    //➡️using Logical AND &&
    // return isDone===true && <li>Completed- {name}</li> ;  //Completed- facebooking is waste of time
    // return isDone===false && <li>Hurry Up- {name}</li> ;   //Hurry Up- Coding is good for learnig


    //➡️usign Logical OR ||
    // return isDone===true || <li>Completed- {name}</li> ;  //Completed- Coding is good for learnig
    // return isDone===false || <li>Hurry Up- {name}</li> ;    //Hurry Up- facebooking is waste of time



    //➡️using variable
    let status;
    if(isDone){
        status =<li>Completed- {name}</li>
    }else {
        status = <li>Hurry Up- {name}</li>
    }
    return status;

}



*/