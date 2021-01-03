import React from 'react'
import Search from "./Search"
import FiletrByRegion from "./FiletrByRegion"
import "./ActionList.css"

const ActionList = ({darkMode}) => {
    return (
        <div className="actionList">
            <Search darkMode={darkMode}/>
            <FiletrByRegion darkMode={darkMode}/>
        </div>
    )
}

export default ActionList
