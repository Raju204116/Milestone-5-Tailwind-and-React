
import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './components/Countries/Countries';

//c29-2
const countriesPromise= async():Promise<CountryType[]> =>{   
        //here, Promise is a default return type. 
        //An async function always returns a Promise. But the type of the Promise will be defined by me.(CountryType[])
        /* 
        For example:
        async function hello() {
          return "Hello";
        }
        Even though you wrote:return "Hello";
        the actual return type is: Promise<string> */

  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();

  return data.countries;  //countries is a key name from the api object
}



function App() {
 

  return (
    <>
    
    {/* c29-2 */}
    <Suspense fallback={<div>Countries are Loading....</div>}> 
            <Countries countriesPromise={countriesPromise()}></Countries>    {/* sending countriesPromise to Countries.tsx */}
    </Suspense>
     
    </>
  )
}

export default App
