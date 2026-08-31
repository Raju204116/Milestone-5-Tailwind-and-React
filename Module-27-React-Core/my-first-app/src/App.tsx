
import './App.css'

import Todo from './Todo'

function App() {    //This App() component will go to main.tsx

  return (
    <>
        <div>
          <h1>Get started</h1>
          <p>Hello </p>
          <Test></Test>     {/* just calling the component Test() like a tag */}

          <Student></Student>

          <Student2 name="Raju" age = "25"> </Student2>   {/*calling and passing data to child Student2() */}
          <Student2 name="Sakib" age = ""> </Student2>   {/*calling and  passing data to child Student2() */}
     
          <Todo task="finish module" time="8:00 PM"> </Todo>    {/* c27-6 */}
          <Todo task="practice tailwind" time="10:00 PM"> </Todo>    {/* c27-6 */}
         

        </div>
    </>
  )
}//App() end


//Test() : c27-3
function Test(){  
  return (
    <>
    <h2>This is my first react tag</h2>
    <h3>This is Second tag</h3>

    </>
  )
}


//Student() : c27-4
function Student(){

    const studentStyle ={
      border: '2px solid green',
      borderRadious:'10px',
      margin:'10px'
    }
  return (
    <div style={studentStyle}>
        <h2>Name:</h2>
        <p>Gpa:</p>
    </div>
  )
}



// Student2() : c27-5
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









//exporting to main.tsx
export default App
