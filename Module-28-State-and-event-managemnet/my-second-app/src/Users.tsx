import { use } from "react";
import UserCard from "./UserCard";

function Users({usersDataPromise}){   //receiving from App.tsx
    
    const users=use(usersDataPromise);
    console.log(users); //Just data is loaded to inspect-console
    
    
    return(
        <div>
            <p>-----------------------------------------------------</p>
            <h2>No of Users: {users.length}</h2>
            {
                users.map((user)=><UserCard user={user}></UserCard>)  //passing every user to UserCard.tsx  to show on screen
            }

        </div>
    )
}

export default Users;