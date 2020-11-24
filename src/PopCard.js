import React from 'react'
import {Popup} from 'react-map-gl'

export default function PopCard(props){
    const {getCord, selectedFood, setSelectedFood} = props
    return(
        <Popup
            latitude = {getCord(selectedFood.location)[0]} 
            longitude = {getCord(selectedFood.location)[1]}
            closeOnClick={false} 
            onClose = {()=> setSelectedFood(null)}
            >
            <div className = "pop-container">
            <div className = 'pop-header'>{selectedFood.name}</div>
              <br></br>
            <div className = 'pop-description'>{selectedFood.description}</div> 
              <br></br>
            <div className = 'pop-address'>Location: <br></br> <a href = {`${selectedFood.map}`} target="_blank"rel="noopener noreferrer" >{selectedFood.address}</a></div>
              <br></br>
            <div className = 'pop-cost'>Cost: {selectedFood.cost}</div>
            </div>
          </Popup>
    )
}