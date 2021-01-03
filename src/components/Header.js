import React, {useState, useEffect} from 'react'
import {useStateValue} from "../redux/StateProvider"
import "./Header.css"

const Header = () => {

    const [{darkMode}, dispatch] = useStateValue();

    const handleDarkMode = () => {
        dispatch({
            type: "SET_DARKMODE",
            payload: !darkMode
        })
    }
    
    const headerClass = darkMode ? "header__darkmode" : "header"
    const moonDark = darkMode ? "moon__dark" : "moon__icon"

    return (
        <header className={headerClass}>
            <div className="header__container">
                <h1>Flags of the world</h1>
                <div className="header__view">
                    <p onClick={handleDarkMode}>
                        <span className={moonDark}>
                            {
                                darkMode ? (
                                    <i className="fas fa-moon"></i>
                                )
                                : (
                                    <i className="far fa-moon"></i>
                                )
                            }
                        </span>
                        Dark Mode
                    </p>
                </div>
            </div>
            
        </header>
    )
}

export default Header
