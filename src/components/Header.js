import React, {useState, useEffect} from 'react'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import "./Header.css"

const Header = ({darkMode, setDarkMode}) => {

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    
    const headerClass = darkMode ? "header__darkmode" : "header"
    const moonDark = darkMode ? "moon__dark" : "moon__icon"

    return (
        <header className={headerClass}>
            <div className="header_container">
                <h1>Flags of the world</h1>
                <div className="header_view">
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
