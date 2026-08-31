
import './App.css'

function App() {

  return (
    <>
        <div>
          <h1>Get started</h1>
          <p>Hello </p>
          <Test></Test>  {/* just calling the component Test() like a tag */}
          <Student></Student>
        </div>
    </>
  )
}//App()


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
        <p>Age:</p>
    </div>
  )
}



//exporting to main.tsx
export default App
