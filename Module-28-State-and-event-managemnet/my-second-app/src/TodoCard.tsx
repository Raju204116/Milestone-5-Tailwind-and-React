
export default function TodoCard({todo}){

    return(
        <div>
            <h2>Title:{todo.title}</h2>
            <p> isCompleted: {todo.completed ? "Yes" : "No"}</p>
            
           
        </div>
    )
}