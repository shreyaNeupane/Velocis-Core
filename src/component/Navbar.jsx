import React from 'react'
import logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar
