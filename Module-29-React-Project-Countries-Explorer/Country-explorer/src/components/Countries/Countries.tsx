import { use } from "react"
import type { CountryType } from "../../type"
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {  //receiving countriesPromise from App.tsx 
    const countries =use(countriesPromise);
    console.log(countries);  //just loaded countries data  into the inspect-console
    

    return (                //showing the loaded countries data to the screen
        <div >
            <h2>No of Countries:{countries.length} </h2>  


        <div className="countries">           {/*sending every single country data to Country.tsx  */}
                   
              {
                countries.map(country=> <Country key={country.ccn3.ccn3} country={country}></Country>)  
              }
        </div>
        
        </div>
    )
}