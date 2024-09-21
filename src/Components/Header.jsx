import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
function Header() {
     return (
          <header>
               <nav>
                    <ul>
                       
                         <li>
                              <NavLink to="/Anime">Anime</NavLink>
                         </li>
                         <li>
                              <NavLink to="/Bollywood">Bollywood</NavLink>
                         </li>
                         <li>
                              <NavLink to="/Hollywood">Hollywood</NavLink>
                         </li>
                         <li>
                              <NavLink to="/Korean">Korean</NavLink>
                         </li>
                         <li>
                              <NavLink to="/Punjabi">Punjabi</NavLink>
                         </li>
                         <li>
                              <NavLink to="/romance">Romance</NavLink>
                         </li>
                       
                    </ul>
               </nav>
          </header>
         
     );
}

export default Header;
