/* 
=>see Users.tsx , App.tsx , UserCard.tsx

➡️overall flow is :

App
 ↓
usersDataPromise
 ↓
Users
 ↓
use(usersDataPromise)
 ↓
users
 ↓
users.map()
 ↓
UserCard





✅✅To Fetch Data we need fetch/async-await function

➡️1. Using  only fetch()
fetch("https://api.example.com/products")
  .then(response => response.json())       //📌then() is called callback function
  .then(data => {
    console.log(data);
  });


📌here:
* `fetch()` → sends a request to the API
* `response.json()` → converts the response into JavaScript data
* `data` → contains the API data



➡️2. Using `async/await`
`async/await` makes asynchronous API code **easier to read**.

async function getProducts() {
  const response = await fetch("https://api.example.com/products" );
  const data = await response.json();
  console.log(data);
}


➡️3. Using `async/await with arrow function

const getProducts = async () {
  const response = await fetch("https://api.example.com/products" );
  const data = await response.json();
  console.log(data);
}




✅✅To load/show data We need some API:



➡️1.Promise function()

=>App.tsx
const userDataPromise = async()=>{
  const response =await fetch('https://jsonplaceholder.typicode.com/users');
  const data =await response.json();
  return data;
}



➡️2.Suspense
<Suspense> lets you display a fallback until its children have finished loading.
⭐children: The actual UI you intend to render. If children suspends while rendering, the Suspense boundary will switch to rendering fallback.
⭐fallback: An alternate UI to render in place of the actual UI if it has not finished loading.

=>App.tsx
=>Send the promise function to the component 

 <Suspense fallback={ <p>Loading....</p> }>
        <Users usersDataPromise={usersDataPromise()}></Users>  //sending data to User.tsx
</Suspense>



=> To know more  :
-go to react.dev =>Learn React => Refference(at upper tab) => Components =>suspense
-https://react.dev/reference/react/Suspense



➡️3.Call the use(promise) Hook
=>Users.tsx

import { use } from "react";
import UserCard from "./UserCard";

function Users({usersDataPromise}){      //receiving from App.tsx
    
    const users=use(usersDataPromise);   
    console.log(users);                 //Just data is loaded to inspect-console
    
    
    return(
        <div>
            <p>-----------------------------------------------------</p>
            <h2>No of Users: {users.length}</h2>
            {
                users.map((user)=><UserCard user={user}></UserCard>)   //passing every user to UserCard.tsx  to show on screen
            }

        </div>
    )
}

export default Users;





*/