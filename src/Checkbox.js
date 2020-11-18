import React from "react";

export default function CheckboxMenu(props) {

    const {register, handleSubmit, onSubmit} = props
    

  return (
    <div className = 'checkbox-container'>
        <form onSubmit={handleSubmit(onSubmit)} className ='checkbox-form'>
            <div className = 'check'>
                <input type = 'checkbox' name ='free' ref={register}/>
                <label className = 'menu'> Free</label >
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name ='$' ref={register}/>
                <label className = 'menu'> $ (Inexpensive)</label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name ='$$' ref={register}/>
                <label className = 'menu'> $$ (Moderate) </label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name ='$$$' ref={register}/>
                <label className = 'menu'> $$$ (Expensive) </label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name ='status' ref={register}/>  
                <label className = 'menu'> In Business</label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name ='Greenmarket' ref={register}/>
                <label className = 'menu'> Greenmarket</label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name ='Grocery' ref={register}/>
                <label className = 'menu'>Grocery Store </label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name = 'GrabAndGo' ref={register}/>
                <label className = 'menu'> Grab & Go Meals </label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name = 'FoodPantry' ref={register}/>
                <label className = 'menu'> Food Pantry</label>
            </div>

            <div className = 'check'>
                <input type = 'checkbox' name ='SoupKitchen' ref={register}/>
                <label className = 'menu'>Soup Kitchen</label>
            </div>
            <br></br>
        <button type="submit">Submit</button>
        </form>
        
    </div>
  );
}
