import React from 'react'
import { useHistory } from "react-router-dom";
import slugify from "slugify";
import "./Country.css"

const Country = ({flag, name, population, region, capital, alpha2code, altSpellings}) => {

        const history = useHistory()

        const handleClick = () => {
            if(alpha2code){
                history.push(`/country/${slugify(alpha2code)}`)
            }else{
                history.push(`/country/${slugify(altSpellings)}`)
            }
        }

    return (
        <div className="country" onClick={handleClick}>
           <img src={flag} alt={name} />
           <div className="country__container">
               <h2>{name}</h2>
               <div className="country__info">
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