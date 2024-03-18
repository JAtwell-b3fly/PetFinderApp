import React from 'react';
import "./NavBarStyles.css";
import { Link } from 'react-router-dom';

import logo_btn from "../assets/logo_btn.jpg";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link to="/home">
        <svg className='logo-btn' width="3rem" height="3rem">
          <image href={logo_btn} width="100%" height="100%" />
        </svg>
      </Link>

        <Link to="/home"><h4 className='nav-bar-tab'>Home</h4></Link>
        <Link to="/about"><h4 className='nav-bar-tab'>About Us</h4></Link>
        <Link to="/profile"><h4 className='nav-bar-tab'>Profile</h4></Link>
        <Link to="/chat"><h4 className='nav-bar-tab'>Chat</h4></Link>
        <Link to="/appointments"><h4 className='nav-bar-tab'>Appointments</h4></Link>

        <h4>O</h4>
    </div>
  )
}

export default NavBar;
