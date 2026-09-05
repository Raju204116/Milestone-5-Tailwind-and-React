import { use } from "react"
import type { CountryType } from "../../type"
import Country from "../Country/Country";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {  //receiving countriesPromise to App.tsx 
    const countries =use(countriesPromise);
    console.log(countries);  //logged into the inspect-console
    

    return (
        <div>
            <h2>No of Countries:{countries.length} </h2>  {/* Showing data to the screen */}

           <ul>
              {
                countries.map(country=> <Country key={country.ccn3.ccn3} country={country}></Country>)
              }
           </ul>
        </div>
    )
}