import React from "react";
import "./Styles.scss"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = ({setShow, size}) => {
    return (
    <nav>
        <div className="nav-box">
            <span className="my-shop" onClick={() => setShow(true)}>ReactMeals</span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </span>
                    <span>{size}</span>
                </div>
        </div>
    </nav>
    );


};

export default NavBar;