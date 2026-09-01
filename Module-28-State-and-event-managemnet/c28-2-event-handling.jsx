/* 
✅✅What is an Event ?
-An event is an action that happens in the user Interface  like click,submit,input,mouse interaction,keyboard interaction...
-Every interaction the user makes is captured by React as an event.

=>Working Flow:
User Aciton =>Event => Event Handler =>UI Response.



✅✅How React handles events ?
-User click =>React detect clicks => handleClick()

⚠️-Never call the function immediately, pass the reference i.e 
    -Do onClick={handleClick}
    -Don't do onClick={handleClick()},  don't do this, then the button will be automatically clicked.
 


✅1.Inline Event Handler  (Try to Avoid)
-The handler is written directly inside the JSX.
-Simple and quick to add.
-Great for very small,one-line actions

-can make JSX harder to read once logic grows.

➡️ex:
 <button onClick={() => alert("Button clicked")}> Click Me</button>


✅2.Named Event Handler
-The handler is defined separately from the JSX.
-JSX stays clean and easy to scan.
-Logic is easier to read and debug.
-Better fit for more comlex operations

-The handler can potentially be reused.


➡️ex:
const handleClick =()=> {    //function/handle defining
    alert("Button2 clicked");
  }

return (
    <button onClick={handleClick}> Click Me 2</button>  //handle calling
)



✅✅Passing Arguments
-Sometimes a handler needs extra information-like which item to add/delete

-While passing arguments:
    - ⚠️we can't do this - onClick={handleClick(101)}         -the function will be automatically called
    - But we can do this - onClick=()=>{handleClick(101)}   -i.e. we can pass data by arrow function
        -Here the arrow function creates a callback- it lets React call the handler later.

➡️ex:

//receiving parameters
  const handleDelete = (id:number)=>{
    alert("Deleted:"+ id);
  }


// passing arguments 
return (
      <button onClick={()=>handleDelete(101)}> Delete User </button>
)



*/ 