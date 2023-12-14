import React from 'react';
import { Link } from 'react-router-dom';
import './design.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="nav-links">
        <li className="homenav">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;