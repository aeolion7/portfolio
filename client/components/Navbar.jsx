import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul id="nav-ul">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/stuff">Other Link</Link>
    </li>
    <li>
      <Link to="/stuff">Another Link</Link>
    </li>
  </ul>
);

export default Navbar;
