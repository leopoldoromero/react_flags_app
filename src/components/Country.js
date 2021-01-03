import React from 'react'
import { useHistory } from "react-router-dom";
import slugify from "slugify";
import "./Country.css"

const Country = ({flag, name, population, region, capital, alpha2code, altSpellings}) => {

        const history = useHistory()

        const handleClick = () => {
            history.push(`/country/${slugify(altSpellings)}`)
        }

    return (
        <div className="country" onClick={handleClick}>
           <img src={flag} alt={name} />
           <div className="country_container">
               <h2>{name}</h2>
               <div className="country_info">
                   <p>
                       <span>Population: {population}</span>
                   </p>
                   <p>
                       <span>Region: {region}</span>
                   </p>
                   <p>
                       <span>Capital: {capital}</span>
                   </p>
               </div>
            </div> 
        </div>
    )
}


export default Country