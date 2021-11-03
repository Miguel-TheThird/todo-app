import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <nav>
        <button>Settings</button>
        <h4>To-do List</h4>
        <Link to='/'>
        <button>logout</button>
        </Link>
      </nav> 
    )
};

export default NavBar;

//react, react-dom, react-router, redux, react-redux, axios or fetch