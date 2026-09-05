import type { CountryType } from "../../type"
import './Country.css'

export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {     //receiving single country data from Countries.tsx
    
    return (                                // showing every single country info
        <div className="country">
            <h3>{country.name.common}</h3> 
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Capital: {country.capital.capital}</h4>
            <h4>Population: {country.population.population}</h4>
        </div>
    )
}