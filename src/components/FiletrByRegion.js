import React, {useState, useEffect} from 'react'
import {useStateValue} from "../redux/StateProvider"
import "./FilterByRegion.css"

const FiletrByRegion = ({darkMode}) => {
    const [{...props}, dispatch] = useStateValue();
    const [region, setRegion] = useState("");
    const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    const dark = darkMode ? "dark__mode" : "filterSelect"
    const handleChange= (e) => {
        
        dispatch({
            type: "GET_COUNTRYLIST_BY_REGION",
            payload: e.target.value,
          });
          setRegion(e.target.value)
    }
    return (
        <div className={dark}>
            <select
            id="Search by region"
            name="Search by region"
            onChange={handleChange}
            >
                <option  value="" >Search by Region</option>
                {
                    regionOptions.map((item)=> (
                        <option key={item} value={item} >{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default FiletrByRegion
