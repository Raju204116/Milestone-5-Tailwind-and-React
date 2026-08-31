
/* 

=>✅✅ We can use CSS in 2 simple way:  

    ➡️1.Writing css in App.css , then import it to App.tsx => (import './App.css')

    ➡️2.Directly by creating a Component in the App.tsx  =>  (see App.tsx of my-first-app)

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


*/