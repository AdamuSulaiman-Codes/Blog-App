import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><Link to="/" className="nav-link">Blog App</Link></div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/aboutus" className="nav-link">About Us</Link>
        </li>
        <li>
          <Link to="/create" className="nav-link">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
