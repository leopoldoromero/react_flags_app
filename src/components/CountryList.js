import React, {useState, useEffect} from 'react'
import {useStateValue} from "../redux/StateProvider"
import Country from "./Country"
import axios from "axios"
import "./CountryList.css"


const CountryList = () => {

    const [{...props}, dispatch] = useStateValue();
    const [data, setData] = useState([]);
    const {countryListByName, countryListByRegion, countryList} = props



    useEffect(() => {
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
       
    }, [dispatch])

    let list;

    if(countryListByRegion !== "" && countryListByRegion.length > 0){
        console.log("lista por region")
        list = countryListByRegion
    }if(countryListByName !== "" && countryListByName.length > 0){
        console.log("lista por nombre")
        list = countryListByName
    }else{
        console.log("lista ")
        list = countryList
    }

    return (
        <div className="countryList">
            {
               list?.map((country) => (
                <Country
                key={country.name}
                name={country.name}
                flag={country.flag}
                population={country.population}
                region={country.region}
                capital={country.capital}
                alpha2Code={country.alpha2Code}/>
            ))
            }
        </div>
    )
}



export default CountryList
