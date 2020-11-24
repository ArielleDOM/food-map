import React, {useState} from "react";
import { FaAngleDoubleDown,  FaAngleDoubleUp, FaWindowClose} from 'react-icons/fa'

export default function InfoWindow(props) {

    const {state, setState} = props

    const [arrow, setArrow] = useState({
        revealInfo: false
    })

    const UpAndDown = () => {
        if(arrow.revealInfo) return 'block'
        else return 'none'
    }

    const closeInfoBar = () => {
        if(state.closeInfoBar) return 'block'
        else return 'none'
    }

    const changeInfoArrowState = () =>{
            setArrow({
            revealInfo: !arrow.revealInfo
        })
    }

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
            closeInfoBar: false
        })
    }

  return (
    <div className = "info-window" style = {{display : closeInfoBar()}}>
        <div className = 'info-window-container' style = {{display : UpAndDown()}}>
            <p>
                Welcome!
                <br></br>
                <br></br>
                Use this map to find locations that offer free food (food pantries and Grab & Go meals at NYC schools), as well as grocery stores and farmers' markets.
                <br></br>
                <br></br>
                Grab & Go Meals (NYC Schools)
                <br></br>
                Pantry/Mobile Food Pantry
                <br></br>
                Soup Kitchen/Mobile Soup Kitchen
                <br></br>
                Greenmarket/Farm stand/Fresh Food box
                <br></br>
                Grocery Store
                <br></br>
                <br></br>
                Grab & Go sites are updated daily and Food Pantry and Soup Kitchen Sites are updated weekly.
                <br></br>
                <br></br>
                Hours and locations on this map are subject to change. It is possible additional food locations are open but not featured on this map.
            </p>
        </div>
        <div className = "info-navbar-container" onClick = {changeInfoArrowState}>
            <div className="info-navbar">
                <h4>Find Food NYC Information</h4>
                <div>
                    {arrow.revealInfo ? <FaAngleDoubleDown/> : <FaAngleDoubleUp/>}
                </div>

                <div className = "info-window-close-bttn" onClick = {changeInfoBarState}>
                    <FaWindowClose opacity = "0.5"/>
                </div>
            </div>
        </div>
    </div>
  );
}