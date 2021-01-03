import React from 'react'
import "./CountrySelected.css"

const CountrySelected = ({name, nativeName, population, region, subregion, capital, flag}) => {
    return (
        <div className="countrySelected">
            <div className="countrySelected__container">
                <img src={flag} alt="" />
                <div className="countrySelected__info">
                    <h2>{name}</h2>
                    <p>
                       <strong> Native Name:</strong>{nativeName}
                    </p>
                    <p>
                        <strong> Population:</strong>{population}
                    </p>
                    <p>
                        <strong> Region:</strong>{region}
                    </p>
                    <p>
                        <strong> Subregion:</strong> {subregion}
                    </p>
                    <p>
                        <strong>Capital: </strong>{capital}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default CountrySelected
