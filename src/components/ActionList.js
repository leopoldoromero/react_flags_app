import React from 'react'
import Search from "./Search"
import FiletrByRegion from "./FiletrByRegion"
import "./ActionList.css"

const ActionList = () => {
    return (
        <div className="actionList">
            <Search/>
            <FiletrByRegion/>
        </div>
    )
}

export default ActionList
