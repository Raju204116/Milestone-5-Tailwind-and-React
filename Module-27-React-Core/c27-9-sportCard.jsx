
/* 
see: Sports.tsx, SportCard.tsx, type.ts, App.css


✅✅App.css
.card{   // custom css- used in Sport card 
  border: 2px solid red;
  margin: 2px;

}


✅✅type.ts
export interface SportsType{  //used in SportCard
    name:string,
    players:number
}


✅✅Sports.tsx
import SportCard from "./SportCard";
import type { SportsType } from "./type";

const sports:SportsType[] =[
    {name:"Footbal", players:11},
    {name:"kabadi", players:9},
    {name:"daba",players:2}
]


export default function Sports(){
    return (
        <div>
            {
                sports.map((sport)=><SportCard sport={sport} /> )  //passing data to SportCard
            }
        </div>
    )

}



✅✅SportCard.tsx
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

*/