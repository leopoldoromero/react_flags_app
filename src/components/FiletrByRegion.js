import React, {useState, useEffect} from 'react'
import {useStateValue} from "../redux/StateProvider"
import "./FilterByRegion.css"

const FiletrByRegion = () => {
    const [{...props}, dispatch] = useStateValue();
    const [region, setRegion] = useState("");
    const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    const handleChange= (e) => {
        
        dispatch({
            type: "GET_COUNTRY_LIST_BY_REGION",
            payload: e.target.value,
          });

    }
    return (
        <div className="filterSelect">
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
