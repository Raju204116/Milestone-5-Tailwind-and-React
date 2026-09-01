
import './App.css'

function App() {
 
  // function/handle defining
  const handleClick =()=> { 
    alert("Button2 clicked");
  }

  //receiving parameters
  const handleDelete = (id:number)=>{
    alert("Deleted:"+ id);
  }


  return (
    <>
    
      {/* Inline event handler */}
      <button onClick={() => alert("Button clicked")}> Click Me</button>
    

      {/* Named Event Handler */}  
     <button onClick={handleClick}> Click Me 2</button>   {/* handle calling */}


      {/* ⚠️Don't do this, then the button will be automatically clicked */}
      {/* <button onClick={handleClick()}> Click Me 2</button> */}


      {/* passing arguments */}
      <button onClick={()=>handleDelete(101)}> Delete User </button>


    </>
  )
}

export default App
