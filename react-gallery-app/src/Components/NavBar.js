import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () =>(

  <nav className="main-nav">
        <ul>
          <li><NavLink exact to="#">Sky</NavLink></li>
          <li><NavLink to="#">Pawn</NavLink></li>
          <li><NavLink to="#">Computers</NavLink></li>
        </ul>
      </nav>

)

export default NavBar

