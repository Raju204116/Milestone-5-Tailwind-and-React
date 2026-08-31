
interface propsType{
    name:string,
    isDone:boolean
}


export default function Task({name,isDone}:propsType){
    
    //➡️using If-else
    // if(isDone===true){
    //     return <li>Completed: {name}</li>
    // }
    // return <li>Pending:{name}</li>


    //➡️usign ternary ?:
    // return isDone===true ? <li>Completed- {name}</li> :  <li>Pending:{name}</li> ;


    //➡️using Logical AND &&
    // return isDone===true && <li>Completed- {name}</li> ;  //Completed- facebooking is waste of time
    // return isDone===false && <li>Hurry Up- {name}</li> ;   //Hurry Up- Coding is good for learnig


    //➡️usign Logical OR ||
    // return isDone===true || <li>Completed- {name}</li> ;  //Completed- Coding is good for learnig
    // return isDone===false || <li>Hurry Up- {name}</li> ;    //Hurry Up- facebooking is waste of time



    //➡️using variable
    let status;
    if(isDone){
        status =<li>Completed- {name}</li>
    }else {
        status = <li>Hurry Up- {name}</li>
    }
    return status;

}