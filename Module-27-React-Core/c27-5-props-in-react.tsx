
/* 

✅✅Props in React
-Props means properties. It is an Object . 
-Actually it receives the parameters as an Object from the parent Component.
-Reacts components use Props to communicate with each other
-It always goes from parent to child
-It can receive any type of data - string,number,boolean,array,objects,functions......
-It is an unidirectional process

➡️see App.tsx 
function App() {    
  return (
    <>
        <div>
          <h1>Get started</h1>
          <p>Hello </p>
         
          <Student2 name="Raju" age = "25"> </Student2>   //calling and passing data to child Student2()
          <Student2 name="Sakib" age = ""> </Student2>    //calling and passing data to child Student2()
     

        </div>
    </>
  )
}//App() end


// Student2() 
function Student2(props){  //receiving data from the parent component App() 

  // console.log("See this inside the inspect-console",props);   //{name: 'Raju', age: '25', children: ' '}
  
  const st2Style= {
    border:'2px solid red'
  }
  return (
    <div style={st2Style}>
        <h1>Name: {props.name} </h1>
        <h2>Age: {props.age}</h2>
    </div>
  )
}


*/

