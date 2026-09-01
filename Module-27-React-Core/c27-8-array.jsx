/* 
see:
✅=>Book.tsx
export default function Book({name}:{name:string}){
    return <li>Book name is : {name}</li>
}



✅=>User.tsx

interface User {
    name:string,
    isLoggedIn:boolean
}

const users:User[]=[
    {name:'Omar sunny', isLoggedIn:true},
    {name:'Salman Shah', isLoggedIn:false},
    {name:'Manna',isLoggedIn:false}
]


export default function Users (){
    return(
        <div>
            {
                users.map(user => <li>{user.name}</li>)
            }
            
        </div>
    )
}




*/