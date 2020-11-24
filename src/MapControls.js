import React  from 'react'
import {GeolocateControl, NavigationControl} from 'react-map-gl'

export default function MapControls(props){
    const {setViewport, mapRef} = props

    const geolocateStyle = {
        float: 'left',
        margin: '8px',
        padding: '8px'
      };


      const resetMap = () => {
          setViewport({
            latitude: 40.7128, //40.7127281
            longitude: -74.0060152, //74.0060
            zoom: 11
          })
      }

    return(
        <div className = "controls-container">
            <div className = 'zoom-control'>
                <NavigationControl mapRef = {mapRef}/>
            </div>

            <div className = "geolocate-control">
                <GeolocateControl
                style = {geolocateStyle}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                ></GeolocateControl>
                <button className = 'home-bttn' 
                    onClick = {resetMap}>RESET MAP
                </button>
            </div>

            
      </div>
    )
}