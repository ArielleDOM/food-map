import React from 'react'
import {Marker} from 'react-map-gl'
import groceryIcon from './images/grocery.svg'
import greenIcon from './images/green.svg'
import soupIcon from './images/soup.svg'
import grabIcon from './images/grab.svg'
import foodPantryIcon from './images/foodpantry.svg'

export default function MarkerCard(props){
    const {food, setSelectedFood, getCord, state} = props

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
    return(
        <Marker
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
    )
}