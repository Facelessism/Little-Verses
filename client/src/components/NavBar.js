import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          Little <span>Verses</span>
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/create" onClick={closeMenu}>Create</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>
        <Link to="/profile/guest" onClick={closeMenu}>Profile</Link>
      </div>
      
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}


export default NavBar;
