import React, { useState, useEffect, Fragment } from 'react'
import {useStateValue} from "../redux/StateProvider"
import CountrySelected from "./CountrySelected"
import axios from "axios"
import "./CountryPage.css"

const CountryPage = ({match, history }) => {

    const [{countryList, darkMode}, dispatch] = useStateValue();
    const [country, setCountry] = useState();

    const pageDark = darkMode ? "countryPage__darkmode" : "countryPage"
    useEffect(()=> {
        if (!country) {
            axios.get(`https://restcountries.eu/rest/v2/alpha/${match.params.id.toLowerCase()}`)
            .then((res) => {
                console.log(res.data)
                setCountry(res.data)
            })
          }
          
    }, [country])

    const handleClick = () => {
        history.goBack()
    }

    return (
        <div className={`countryPage ${darkMode ? "darkmode" : ""}`}>
            <div className="countryPage__buttons">
                <button onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i>Back</button>
            </div>
            {
               <CountrySelected {...country}/>  
            } 
        </div>
    )
}

export default CountryPage
