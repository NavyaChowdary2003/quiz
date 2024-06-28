import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

let Nav = () => {
    return(
        <div className="Nav">
            <Link to='/home'>Home</Link>
            <Link to='/delight'>Delight</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default Nav;