import './Navbar.css';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.png'

export default function Navbar() {
   const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
   const navigate = useNavigate();
   return (
      <div>
         <img src={logo} alt="Logo" />
         <ul>
            <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/">Home</NavLink></li>
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sign up</NavLink></li>}
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/private">Private view</NavLink></li>}
            {isLoggedIn && <li><button onClick={() => logOutUser()}>Log out</button></li>}
         </ul>
      </div>
   )
}
