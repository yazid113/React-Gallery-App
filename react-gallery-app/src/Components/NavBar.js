import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () =>(

  <nav className="main-nav">
        <ul>
          <li><NavLink to="/football">Football</NavLink></li>
          <li><NavLink to="/computers">Computers</NavLink></li>
          <li><NavLink to="/javascript">Javascript</NavLink></li>
        </ul>
      </nav>

)

export default NavBar

