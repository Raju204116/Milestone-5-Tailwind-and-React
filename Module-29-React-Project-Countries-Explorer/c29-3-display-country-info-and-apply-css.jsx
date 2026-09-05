
/* 


✅✅Coding Sequence:

➡️1.Show the countries info using map and list -inside the ⭐Countries.tsx  //(Deleted later)
     <ul>
        {
            countries.map(country=><li> {country.name.common}</li>)
        }
    </ul>

➡️2.Create a type for the flag  -inside the ⭐type.ts  

    =>not used right now
     flags:{
        flags:{
            png:string,
            svg:string,
            alt:string
        }
    },

➡️3.Create two folder Countries and Country -inside the ⭐components folder
    src=>components:
            =>Country
            =>Countries

➡️4.Create a Country component  -inside the ⭐Country.tsx
    - write  rcf-di  (enter)
    -modify the interface and 
    -create receiving elements(h3) to receive data from Countries.tsx

    =>Country.tsx
        import type { CountryType } from "../../type"
        import './Country.css'

        export interface CountryProps {
            country: CountryType
        }

        export default function Country({ country }: CountryProps) {
            
            return (
                <div className="country">
                    <h3>{country.name.common}</h3> 
                </div>
            )
        }



➡️5.Send single country data from ⭐Countries.tsx to Country.tsx 
    {
    countries.map(country=> <Country  country={country}></Country>)
    }

➡️6.Create a ⭐Country.css file -inside the Country folder
    -and import to Country.tsx

    =>Country.css
    .country{
        border: 2px solid green;
        border-radius: 5px;
        margin: 5px;
    }

➡️7.Create a type for the  ccn3 -inside the ⭐type.ts
     ccn3:{
        ccn3:string
    }
    

➡️8.Create a unique key for every country  to remove the error -inside the ⭐Courtreis.tsx

    {
    countries.map(country=> <Country key={country.ccn3.ccn3} country={country}></Country>)
    }








5.


*/