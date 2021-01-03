import React, {useState, useEffect} from 'react'
import {useStateValue} from "../redux/StateProvider"
import "./Search.css"

const Search = () => {
    const [input, setInput] = useState("")
    const [{...props}, dispatch] = useStateValue();
    
    const dark = props.darkMode ? "search__darkmode" : "search"

    const handleChange = (e) => {
        
        dispatch({
            type: "GET_COUNTRYLIST_BY_NAME",
            payload: e.target.value
        })
        setInput(e.target.value)
       
    }

    const clearInput = () => {
       dispatch({
           type: "GET_COUNTRYLIST_BY_NAME",
           payload: ""
       })
       setInput("")
    }
 
    
    return (
        <div className={dark}>
            {
                input ? (
                    <i className="fas fa-times close" onClick={clearInput}></i>
                )
                : (
                    <i className="fas fa-search"></i> 
                )
            }
           
           <form onSubmit={handleChange}>
            <input type="text"
                placeholder="Please choose a country"
                value={input} 
                onChange={handleChange}
                />
           </form>
             
        </div>
    )
}


export default Search
