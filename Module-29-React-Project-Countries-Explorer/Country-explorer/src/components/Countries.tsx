import { use } from "react"
import type { CountryType } from "../type"

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const countries =use(countriesPromise);
    console.log(countries);  //logged into the inspec-console
    

    return (
        <div>
            <h2>No of Countries:{countries.length} </h2>
        </div>
    )
}