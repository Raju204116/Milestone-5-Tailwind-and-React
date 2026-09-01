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