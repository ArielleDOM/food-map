import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs"

export default function NavBar(props) {
    const {state, setState} = props

    const changeInfoBarState = () =>{
        setState({
            free: state.free,
            $: state.$,
            $$: state.$$,
            $$$: state.$$$,
            status: state.status,
            Greenmarket: state.Greenmarket,
            Grocery: state.Grocery,
            GrabAndGo: state.GrabAndGo,
            FoodPantry: state.FoodPantry,
            SoupKitchen: state.SoupKitchen,
            closeInfoBar: !state.closeInfoBar
        })
    }

    return (
        <div className="navbar">
        <h1>Find Food NYC</h1>
        <div className="navbar-links">
            <a href = 'https://www1.nyc.gov/site/coronavirus/index.page' target="_blank" rel="noopener noreferrer"> COVID-19 Info</a>
            <a href = 'https://a069-access.nyc.gov/accesshra/' target="_blank" rel="noopener noreferrer"> ACCESS HRA</a>
            <a href = 'https://www1.nyc.gov/site/helpnownyc/index.page' target="_blank" rel="noopener noreferrer"> Help Now NYC</a>
        </div>

        <div className = 'info-icon'>
           <BsFillInfoCircleFill onClick = {changeInfoBarState} size={25} opacity = '0.5'/>
        </div>

        </div>

    )
}