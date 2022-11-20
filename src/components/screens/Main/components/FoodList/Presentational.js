import React from "react";
import list from "../data";
import FoodItem from "../FoodItem/Presentational";

import "./Styles.scss"


const FoodList = ({handleClick}) => {
    
    return (
        <section>
            {list.map((item)=> (
            <FoodItem key={item.id} item={item} handleClick={handleClick}/>
            ))};
       
        </section>
    )
}

export default FoodList