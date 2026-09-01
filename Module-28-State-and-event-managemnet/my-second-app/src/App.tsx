
import './App.css'
import Batter from './Batter';
import Cart from './Cart';
import Counter from './Counter';

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


      <h2>c28-3-4</h2>
      <Cart></Cart>        {/* will not work */}
      
      <Counter></Counter>  {/* It will work */}

      <Batter></Batter>



    </>
  )
}

export default App
