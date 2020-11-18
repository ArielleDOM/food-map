import React, {useRef} from 'react'
import Geocoder from 'react-mapbox-gl-geocoder'
import './App.css';

export default function SearchBox (props){ 

    const {viewport, setViewport} = props

    const params = {
        country: "us"
    }

    const onSelected = (location, item) => {
        setViewport({
          latitude: location.latitude,
          longitude: location.longitude,
          zoom: location.zoom
        })
    }

    const mapRef = useRef()

    return (
        <div className = "searchBox-container">
            <Geocoder
                mapRef = {mapRef}
              className = "searchBox"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              onSelected={onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value = ''
              queryParams={params}
            />
        </div>
    )

}