
import { Suspense } from 'react';
import './App.css'
import Batter from './Batter';
import Cart from './Cart';
import Counter from './Counter';
import Users from './Users';
import Todo from './Todo';


//c28-6
const usersDataPromise = async()=>{
  const response =await fetch('https://jsonplaceholder.typicode.com/users');
  const data =await response.json();
  return data;
}



function App() {
 

  // function/handle defining
  const handleClick =()=> {    //c28-2
    alert("Button2 clicked");
  }

  //defining & receiving parameters
  const handleDelete = (id:number)=>{  //c28-2
    alert("Deleted:"+ id);
  }




  return (
    <>
    
      <h2>c28-2</h2>

      {/* Inline event handler */}
      <button onClick={() => alert("Button clicked")}> Click Me</button>
    
      {/* Named Event Handler */}  
     <button onClick={handleClick}> Click Me 2</button>        {/* handle calling */}

      {/* ⚠️Don't do this, then the button will be automatically clicked */}
      {/* <button onClick={handleClick()}> Click Me 2</button> */}

      {/* calling & passing arguments */}
      <button onClick={()=>handleDelete(101)}> Delete User </button>


      <p>-----------------------------------------------------</p>
      <h2>c28-3-4</h2>
      <Cart></Cart>        {/* will not work */}
      <Counter></Counter>  {/* It will work */}
      <Batter></Batter>


      <h2>c28-6-7</h2>
      <Suspense fallback={ <p>Loading....</p> }>
        <Users usersDataPromise={usersDataPromise()}></Users>  {/* sending data to User.tsx */}
      </Suspense>


      <h2>c28-6-7</h2>
      <Todo></Todo>


    </>
  )
}

export default App
