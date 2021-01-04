import React, {useState, useEffect} from 'react'
import {useStateValue} from "../redux/StateProvider"
import Country from "./Country"
import axios from "axios"
import "./CountryList.css"


const CountryList = () => {

    const [{...props}, dispatch] = useStateValue();
    const [data, setData] = useState([]);
    const {filterByName, filterByRegion, countryListByName, countryListByRegion, countryList} = props
    

let list;

if(filterByName !== "" && countryListByName.length > 0 ){
    console.log("lista por nombre eee")
    console.log(countryListByName)
    list = countryListByName
}else if(filterByRegion !== "" && countryListByRegion.length > 0 ){
    console.log("lista por region")
    list = countryListByRegion
    console.log(countryListByRegion)
}else{
    console.log("lista ")
    list =  countryList
}

    useEffect(() => {
        try {
            axios.get("https://restcountries.eu/rest/v2/all")
            .then((res) => {
                return res.data  
            })
            .then((datos) => {
            setData(datos)
                dispatch({
                    type:"SET_COUNTRY_LIST",
                    payload: datos
                })
            })
        } catch (error) {
            console.log(error)
        }
        
    }, [dispatch])

 

    return (
        <>
            <div className="countryList">
            {
               !list ?
               (
                    <div class="spinner-border m-10 " role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> 
               )
               :   list.map((country) => (
                    <Country
                    key={country.name}
                    name={country.name}
                    flag={country.flag}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    alpha2Code={country.alpha2Code}
                    altSpellings={country.altSpellings[0]}/>
                    ))
            }
        </div>
        
        </>
        
    )
}



export default CountryList
