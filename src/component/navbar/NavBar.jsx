import React from "react";
import UILogo from "../../assets/UIAI.jpg";
import Logo from "../../assets/aadhaar-logo.jpg";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <img src={UILogo} alt="Logo" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">AADHAAR Seva Kendras</li>
          <img src={Logo} alt="Logo" className="nav-item" />
        </ul>
      </div>
      <div className="nav-gradient"></div>
    </nav>
  );
};

export default Navbar;
