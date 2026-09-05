/* 

✅✅Coding Sequence:


➡️1.Create a handler(handleVisited) using useState -inside ⭐Country.tsx 
    const [visited,setVisited]=useState<boolean>(false)

    const handleVisited =()=>{
        setVisited(true)
        
    }


➡️2.Create a button to pass the onClick handler conditionally

    <button onClick={handleVisited}> {visited ? "Visited": "Mark as Visited"}</button>

➡️3.Create css for country-visited and country-visited-h4 inside ⭐Country.css 
        .country-visited{
            background-color: lightgreen;
        }

        .country-visited h4{
            color: red;
        }

➡️4.Apply the css using conditional template string  -inside ⭐Country.tsx 

        <div className={`country ${visited ? "country-visited" : ''} ` }>



➡️5.Create toogle option -inside the ⭐handleVisited

     //create toggle (select-unselect option)
        if(visited==true){
            setVisited(false)
        }else{
            setVisited(true)
        }


        //shorthand
        setVisited(!visited);
   

*/