import './Navbar.css';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.svg'

export default function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className='navbar'>
      <NavLink to="/"><img src={logo} alt="Logo" className="navbar-logo" /></NavLink>
      <ul className="navbar-links">
        <li className="navbar-link"><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/experiences?status=Open">Uexperiences</NavLink></li>
        {!isLoggedIn && <li className="navbar-link"><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sign up</NavLink></li>}
        {!isLoggedIn && <li className="navbar-link"><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></li>}
        {isLoggedIn && <li className="navbar-link"><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/bookings">Bookings</NavLink></li>}
        {isLoggedIn && <li className="navbar-link"><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/myProfile">My Profile</NavLink></li>}
      </ul>
    </nav>
  )
}
