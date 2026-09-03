
function UserCard({user}){   //receiving from Users.tsx
    return(
        <div>
            <h3>Name:{user.name}</h3>     {/* showing to screen */}
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
           

        </div>
    )
}

export default UserCard;