/* 
=>✅✅What is JSX ?
    -JSX is syntax extension of JavaScript.
    -JSX stands for JavaScript XML.
    -It lets us write HTML-like markup inside Js/Ts
    -In a React+TypeScript project, JSX lives inside the .tsx files
    
    -Browser don't understand Jsx/tsx file.That's whay-
    -JSX is transformed into regular JavaScript before running into the browser.
    =>Flow:  .tsx file  =>compiler(Babel) transformation => plain js => browser output


=>✅Converting JSX into regular Js

➡️We write:
    function App(){
        return <h1> Hello World </h1>;
    }

➡️After compilation 
    function App(){
        return _jsx ("h1",{
        children: "Hello World"

        });
    }


➡️Simplified output /What actually stored in Memory
    {
      type:"h1",
      props:{
        children: "Hello World"
      }
    }


✅✅✅JSX Rules:
    ➡️1.Return a Single Root Element. If you need to return multiple items, then wrap them into one parent element -using parenthesis().
        -After parenthesis, you can use <div> </div> or fragment i.e empty tag <> </>
        
        -use of fragment avoids dom from extra node , which is better than <div> 
        
        //using fragment to return multiple items : (see App.tsx )
        function Test(){  
            return (
                <>
                    <h2>This is my first react tag</h2>
                    <h3>This is Second tag</h3>
                </>
            )
        }


    ➡️2.Close all tags.  <img> : wrong,   <img/> : correct

    ➡️3.Use only camelCase for variable naming. 
        -NB: don't use class directly, instead use className ; because class is a jsx keyword

   ➡️4.Dynamic JSX.
        -Curly braces{} let you embed Js expressions directly inside JSX.
        -ex: <p>sum {3+9} </p>

    ➡️5.Where can we use curli braces
        -inside JSX Content : <h1> {name} is good student. </h1>
        -inside attribute :  <img src={avatar} alt={name} />

 
    ➡️6.Double Curly braces {{}}   : (see App.tsx )
        -Js objects need an extra pair of braces when passed directly into JSX.
        -  <div
                style={{
                    color:"red",
                    backgroundColor: "yellow"
                }}
            ></div>


*/