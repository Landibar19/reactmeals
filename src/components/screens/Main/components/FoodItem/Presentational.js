import React from "react";

import "./Styles.scss"

const FoodItem = ({item, handleClick}) => {
    const {title, description,price} = item;

    return (
        <div className="food-items">
            <div className="details">
                <p>{title}</p>
                <p>{description}</p>
                <p>Price-{price}$</p>
                <p>Amount</p>
                <button onClick={() => handleClick(item)}>+Add</button>
            </div>
        </div>
    );
};

export default FoodItem;