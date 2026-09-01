
/* 


➡️see Todo.tsx
-We must export any file to the App.tsx         =>export default Todo;
-And must import that file inside the App.tsx   => import Todo from './Todo'

NB:Import er khetre,
tag shuru  kore Component er first letter likhle ex: <T,  suggestion asbe , then Enter marlei auto import hoye jabe.

➡️see c27-9:4:09 minute
-For single/main export - use default                    =>export default Todo;
-⚠️For Mulitple export -don't use default               =>export Todo;
 and for un-default import we need to use braces {}      =>import {Todo} from './Todo'




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