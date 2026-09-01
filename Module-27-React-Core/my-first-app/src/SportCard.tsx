import type { SportsType } from "./type";
//this type comes form Type.ts

export default function SportCard({sport}:{sport:SportsType}){  //receiving data from Sports()
    return (
        <div className="card">
            <h5>Name:{sport.name}</h5>
            <p>No of Player:{sport.players}</p>
        </div>
    )
}