import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import groceryIcon from './images/grocery.svg'
import greenIcon from './images/green.svg'
import soupIcon from './images/soup.svg'
import grabIcon from './images/grab.svg'
import './App.css';
import * as foodData from "./test-data.json"


function App() {
  const [viewport, setViewport] = useState({
    latitude:40.7127281,
    longitude:-74.0060152,
    width: '100vw',
    height:'100vh',
    zoom: 13,
  })

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
    if(type === "Grocery Store") icon = groceryIcon
    if(type === "Grab & Go Meals (NYC Schools)") icon = grabIcon
    if(type === "Greenmarket/Farm stand/Fresh Food box") icon = greenIcon
    if(type === "Soup Kitchen/Mobile Soup Kitchen") icon = soupIcon
    return icon
  }

  const hideOrShow = (status) => {
    if(status === "NULL") return "none"
    else return "block"
  }

  return (
    <div className="App">
      <ReactMapGL {...viewport} 
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle = "mapbox://styles/arielledom/ckhjzdaiy06z419nugsckawxn"
      onViewportChange = {(viewport) => {
        setViewport(viewport)
      }}
      >
        {foodData.map((food, index) => (
          <Marker key = {index} latitude = {getCord(food.location)[0]} longitude = {getCord(food.location)[1]}>
            <button className = "marker-btn" onClick = {e => {
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
            }}
          >
            <div className = "pop-container">
              <div className = 'pop-header'>{selectedFood.name}</div>
              <div className = 'pop-description'>{selectedFood.description}</div>
              <div className = 'pop-cost' style = {{display: hideOrShow(selectedFood.cost)}}>Cost: {selectedFood.cost}</div>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default App;
