import React from "react";
import "../styles/navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Ivan Yu</div>
        <div className="mobile-icon">
          <FaBars />
        </div>
        <div className="nav-menu">
          <div className="nav-item">
            <div className="nav-link" to="about">
              about
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link" to="about">
              about
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link" to="about">
              about
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
