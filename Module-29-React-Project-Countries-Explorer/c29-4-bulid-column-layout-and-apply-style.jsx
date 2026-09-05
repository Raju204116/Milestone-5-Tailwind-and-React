
/* 
✅✅Coding Sequence:


➡️1.Create ⭐Countries.css -inside the Countries folder  
    -create grid layout for 3 column

    .countries{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        justify-items: center;
        gap: 10px;
    }

➡️2.Apply the countries.css to ⭐Countries.tsx

    import './Countries.css'
    <div className="countries">  </div>



➡️3.Show flags as images -inside the ⭐Country.tsx
        return (                        // showing every single country info
            <div className="country">
                <h3>{country.name.common}</h3> 
                <img src={country.flags.flags.png} alt="" />
            </div>
        )

➡️4.Create css for flags images -inside the ⭐Countries.css

    .country img{
        padding: 10px;
    }


➡️5.H.W =show population and capital -inside ⭐Country.tsx

    ➡️create type for population and capital inside the ⭐type.ts

            capital:{
                capital:string
            },

            population:{
                population:number
            }


    ➡️Show them inside the Country.tsx

        <h4>Capital: {country.capital.capital}</h4>
        <h4>Population: {country.population.population}</h4>

*/