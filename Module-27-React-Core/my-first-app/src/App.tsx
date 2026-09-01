
import './App.css'

import Todo from './Todo'
import Task from './Task'
import Book from './Book'
import Users from './User'

function App() {    //This App() component will go to main.tsx

const books=['Physics','Chemistry', 'Biology', 'Math', 'English']  //c27-8

  return (
    <>
        <div>
          <h1>Get started</h1>
          <p>Hello </p>
          <Test></Test>     {/* c27-3  just calling the component Test() like a tag   */}

          <Student></Student>  {/* c27-4 */}

        {/* <Student2> </Student2>   If I use this both tag then react show an error that we don't have children,
          that's why I use single closing tag <Student2/>   */}

          <Student2 name="Raju" age = {25}/>    {/* c27-5 calling and passing data to child Student2() */}
          <Student2 name="Sakib" age = {20}/>   
     
          
          <Todo task="finish module" time="8:00 PM" />     {/* c27-6 */}
          <Todo task="practice tailwind" time="10:00 PM"/>     

          <h2>C27-7</h2>
          <Task name="facebooking is waste of time" isDone={true}/>  {/* c27-7 */}
          <Task name="Coding is good for learnig" isDone={false}/>  
         
          <h2>C27-8-book Array</h2>
          {
            books.map((book)=><Book name={book}></Book>)  //c27-8
          }

          <h2>C27-8-User array</h2>
          <Users/>   {/* c27-8 */}

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
function Student2(props:{name:string,age:number}){  //receiving data from the parent component App() 
  // console.log("See this inside the inspect-console",props);   //{name: 'Raju', age: '25', children: ' '}
  
  const st2Style= {
    border:'2px solid red'
  }
  return (
    <div style={st2Style}>
        <h2>Name: {props.name} </h2>
        <h3>Age: {props.age}</h3>
    </div>
  )
}









//exporting to main.tsx
export default App
