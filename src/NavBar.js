import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs"

export default function NavBar() {

    return (
        <div className="navbar">
        <h1>Find Food NYC</h1>
        <div className="navbar-links">
            <a href = 'https://www1.nyc.gov/site/coronavirus/index.page' target="_blank" rel="noopener noreferrer"> COVID-19 Info</a>
            <a href = 'https://a069-access.nyc.gov/accesshra/' target="_blank" rel="noopener noreferrer"> ACCESS HRA</a>
            <a href = 'https://www1.nyc.gov/site/helpnownyc/index.page' target="_blank" rel="noopener noreferrer"> Help Now NYC</a>
        </div>

        <div className = 'info-icon'>
           <BsFillInfoCircleFill size={25} opacity = '0.5'/>
        </div>

        </div>

    )
}