import React, {useState, useEffect,  useCallback, useRef} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import groceryIcon from './images/grocery.svg'
import greenIcon from './images/green.svg'
import soupIcon from './images/soup.svg'
import grabIcon from './images/grab.svg'
import foodPantryIcon from './images/foodpantry.svg'
import './App.css';
import { useForm } from "react-hook-form";
import * as foodData from "./food-map-data.json"
import CheckboxMenu from './Checkbox'
import Geocoder from 'react-map-gl-geocoder'

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.7127281,
    longitude: -74.0060152,
    zoom: 12.5,
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

  const params = {
    country: "us"
  }

  //Menu Components
  const [state, setState] = useState({
    free: true,
    $: true,
    $$: true,
    $$$: true,
    status: false,
    Greenmarket: true,
    Grocery: true,
    GrabAndGo: true,
    FoodPantry: true,
    SoupKitchen: true,
  })

  const { register, handleSubmit } = useForm({
    defaultValues: {
      free: true,
      $: true,
      $$: true,
      $$$: true,
      status: false,
      Greenmarket: true,
      Grocery: true,
      GrabAndGo: true,
      FoodPantry: true,
      SoupKitchen: true
    }
  });

  const onSubmit = data => {
    setState({
      free: data.free,
      $: data.$,
      $$: data.$$,
      $$$: data.$$$,
      status: data.status,
      Greenmarket: data.Greenmarket,
      Grocery: data.Grocery,
      GrabAndGo: data.GrabAndGo,
      FoodPantry: data.FoodPantry,
      SoupKitchen: data.SoupKitchen
    })
  };

  //Markers

  const [selectedFood, setSelectedFood] = useState(null)
  
  useEffect(() => {
      const listner = (e) => {
        if(e.key === "Escape") setSelectedFood(null)
      }

      window.addEventListener("keydown", listner)

      return () => {
        window.removeEventListener('keydown', listner)
      }
  }, [])

  const getCord = (str) =>{
    return JSON.parse(str)
  }

  const getIcon = (type) => {
    let icon;
    if(type === "Grocery") icon = groceryIcon
    if(type === "GrabAndGo") icon = grabIcon
    if(type === "Greenmarket") icon = greenIcon
    if(type === "SoupKitchen") icon = soupIcon
    if(type === "FoodPantry") icon = foodPantryIcon
    return icon
  }

  const hideOrShow = (type, cost, status) => {
    status = JSON.parse(status)
    if(state.status && !status) return 'none'
    if(!state[type]) return "none"
    if(cost === 'FREE' && !state.free) return 'none'
    if(cost === '$' && !state.$) return 'none'
    if(cost === '$$' && !state.$$) return 'none'
    if(cost === '$$$' && !state.$$$) return 'none'
    else return "block"
  }

  return (
    <div style={{ height: "100vh" }}>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapStyle = "mapbox://styles/arielledom/ckhjzdaiy06z419nugsckawxn"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >

      <CheckboxMenu 
          register = {register} 
          handleSubmit = {handleSubmit} 
          onSubmit = {onSubmit}/>


        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          position="top-right"
          queryParams={params}
        />

        {foodData.map((food, index) => (
          <Marker
            key = {index}
            latitude = {getCord(food.location)[0]} 
            longitude = {getCord(food.location)[1]}>
            <button 
              style = {{display: hideOrShow(food.type, food.cost, food.status)}}
              className = "marker-btn" onClick = {e => {
                e.preventDefault()
                setSelectedFood(food)
              }}>
              <img src = {getIcon(food.type)} alt ="Food Icon"/>
            </button>
          </Marker>
        ))}

        {selectedFood ? (
          <Popup 
            latitude = {getCord(selectedFood.location)[0]} 
            longitude = {getCord(selectedFood.location)[1]} 
            onClose = {() =>{
              setSelectedFood(null)
            }}>
            <div className = "pop-container">
              <div className = 'pop-header'>{selectedFood.name}</div>
              <br></br>
              <div className = 'pop-description'>{selectedFood.description}</div> 
              <br></br>
              <div className = 'pop-address'>Location: <br></br> <a href = {`${selectedFood.map}`}>{selectedFood.address}</a></div>
              <br></br>
              <div className = 'pop-cost'>Cost: {selectedFood.cost}</div>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default App