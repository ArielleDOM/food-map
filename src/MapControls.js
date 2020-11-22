import React from 'react'
import {GeolocateControl, NavigationControl} from 'react-map-gl'

export default function MapControls(){
    const geolocateStyle = {
        float: 'left',
        margin: '8px',
        padding: '8px'
      };

    return(
        <div className = "controls-container">
            <div className = 'zoom-control'>
                <NavigationControl />
            </div>

            <div className = "geolocate-control">
                <GeolocateControl
                style = {geolocateStyle}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                /> 
            </div>
      </div>
    )
}