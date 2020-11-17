import React from "react";
// import { useForm } from "react-hook-form";
import { Checkbox } from '@material-ui/core';

export default function CheckboxMenu(props) {

    const {register, handleSubmit, onSubmit} = props
    

  return (
    <div className = 'checkbox-container'>
        <form onSubmit={handleSubmit(onSubmit)} className ='checkbox-form'>
            <label>
                <input type = 'checkbox' name ='free' ref={register}/>
                Free
            </label>
            <label>
                <input type = 'checkbox' name ='$' ref={register}/>
                $ (Inexpensive)
            </label>
            <label>
                <input type = 'checkbox' name ='$$' ref={register}/>
                $$ (Moderately expensiv)
            </label>
            <label>
                <input type = 'checkbox' name ='$$$' ref={register}/>
                $$$ (Expensive)
            </label>
            <label>
                <input type = 'checkbox' name ='status' ref={register}/>
                In Business
            </label>
            <label>
                <input type = 'checkbox' name ='Greenmarket' ref={register}/>
                Greenmarket
            </label>
            <label>
                <input type = 'checkbox' name ='Grocery' ref={register}/>
                Grocery Store
            </label>
            <label>
                <input type = 'checkbox' name = 'GrabAndGo' ref={register}/>
                Grab & Go Meals
            </label>
            <label>
                <input type = 'checkbox' name = 'FoodPantry' ref={register}/>
                Food Pantry
            </label>
            <label>
                <input type = 'checkbox' name ='SoupKitchen' ref={register}/>
                Soup Kitchen
            </label>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}
