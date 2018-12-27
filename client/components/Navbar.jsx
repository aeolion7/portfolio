import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul id="nav-ul">
    <div id="nav-title">
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
    <div id="nav-links">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/stuff">Another Link</Link>
      </li>
    </div>
  </ul>
);

export default Navbar;
