import React, { useState } from "react";
import NavBar from "./components/NavBar/Presentational";
import FoodList from "./components/FoodList/Presentational";
import Cart from "./components/Cart/Presentational";

import "./Styles.scss"

const Main = () => {
    const [show, setShow] = useState(true)
    const [cart, setCart] = useState([])

    const handleClick =(item) => {
        if (cart.indexOf(item)!==-1)return;
        setCart([...cart, item]);
    };

    const handleChange = (item, d)=> {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;
        if (arr[ind].amount === 0)arr[ind].amount = 1;
        setCart([...arr]);
       /* useEffect(() => {
            console.log("cart change");
        }, [cart]);*/
    };
  
    return (
        <>
        
        <NavBar setShow={setShow} size={cart.length} />

        <div className="main-container">
            <div className="main-info">
                <div className="inputBox textarea">
                    <h2>Delicious Food, Delivery To You</h2>
                    <p>Choose your favorite meal from our broad selection of available meals 
                    and enjoy a delicious lunch or dinner at home.
                    <br></br>
                    <br></br>
                    All our meals are cooked with high-quality ingredients, 
                    just-in-time and of course by experenced chefs!
                    </p>
                </div>
            </div>
        </div>
        {show ? (
        <FoodList handleClick={handleClick}/>
        ): (

         <Cart  cart={cart} setCart={setCart} handleChange={handleChange}/>
        )};
     
    
        
        </> 
        
        
        
    )
}

export default Main;