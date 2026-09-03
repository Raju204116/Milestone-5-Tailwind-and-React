/*
=>see type.ts, Countries.tsx, App.tsx


✅✅collect data/api from programming hero repository:
https://github.com/ProgrammingHero1/react-ts-on-the-go#apis-used


https://openapi.programming-hero.com/api/all
https://openapi.programming-hero.com/api/alpha/116
https://openapi.programming-hero.com/api/lang/english
https://openapi.programming-hero.com/api/name/bangladesh



✅✅Coding Sequence:

1.Create a promise function (countriesPromise) using any of the above api -inside the App.tsx

    const countriesPromise= async():Promise<CountryType[]> =>{
        const res = await fetch('https://openapi.programming-hero.com/api/all');
        const data = await res.json();

        return data.countries;  //countries is a key name from the api object
    }



2.Create a type(CountryType) for the Return type of the promise function -inside the type.ts

    export interface CountryType {
        name:{
            common:string,
            official:string
        }
        

    }


3.Create a Suspense -inside the App.tsx

    <Suspense fallback={<div>Countries are Loading....</div>}> 
                
    </Suspense>



4.Crate a components folder under src
5.Create a Component (Countries) -inside the component folder =>Countries.tsx
    -write rcf-di -enter to auto create

    -modify the auto created interface (CountriesProps) for the return type of Countries fucntion -inside the same file
    -create use(promise) hook


=>Countries.tsx
    import { use } from "react"
    import type { CountryType } from "../type"

    export interface CountriesProps {
            countriesPromise: Promise<CountryType[]>
        }

    export default function Countries({ countriesPromise }: CountriesProps) {
        const countries =use(countriesPromise);  //hook

        console.log(countries);  //logged into the inspec-console
        

        return (
            <div>
                <h2>No of Countries:{countries.length} </h2>
            </div>
        )
    }






6.Call the promise Function(countriesPromise()) from the suspense -inside the App.tsx

    <Suspense fallback={<div>Countries are Loading....</div>}> 
            <Countries countriesPromise={countriesPromise()}></Countries>
    </Suspense>
     


*/