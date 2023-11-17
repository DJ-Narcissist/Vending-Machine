import React from "react";
import { NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar"> 
        <NavLink exact to="/"> Home</NavLink>
        <NavLink exact to="/snack/sprite"> Sprite</NavLink>
        <NavLink exact to="/snack/oreos"> Oreos</NavLink>
        <NavLink exact to="/snack/poptart"> PopTart</NavLink>
      </nav>
    );
};

export default NavBar;