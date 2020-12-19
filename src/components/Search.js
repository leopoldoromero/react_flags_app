import React, {useState, useEffect} from 'react'
import {useStateValue} from "../redux/StateProvider"
import "./Search.css"

const Search = () => {
    const [input, setInput] = useState("")
    const [{...props}, dispatch] = useStateValue();
    

    const handleChange = (e) => {
        
        dispatch({
            type: "GET_COUNTRY_LIST_BY_NAME",
            payload: input
        })
        setInput(e.target.value)
       
    }

    const clearInput = () => {
       //dispatch({
       //    type: "SET_COUNTRY_LIST_BACK",
       //    payload: ""
       //})
       //setInput("")
    }
 
    
    return (
        <div className="search">
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
