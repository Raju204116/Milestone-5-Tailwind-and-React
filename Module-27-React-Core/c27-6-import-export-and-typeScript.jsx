
/* 
=>see Todo.tsx
-We must export any file to the App.tsx         =>export default Todo;
-And must import that file inside the App.tsx   => import Todo from './Todo'



✅✅Todo.tsx

➡️//typeScript for props
interface typeOfTodoProps {
    task:string,
    time?:string
}

➡️//using props directly
// function Todo (props:typeOfTodoProps){
    
//     return(
//         <div>
//             <li> You have to {props.task} before {props.time} </li>
//         </div>
//     )
// }



➡️//using destructuring {}
// function Todo ({task,time}:{ task:string,time?:string}){
function Todo ({task,time}:typeOfTodoProps){
    
    return(
        <div>
            <li>You have to  :{task} before {time} </li>
        </div>
    )
}


➡️export default Todo;

*/