import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <span className="logo-bold">NEXUS</span> VENTURES
        </h1>
        <p>POWER AND SUCCESS INSPIRED LIFE</p>
      </div>
      <div className="navbar-buttons">
        <button className="login-btn">
          <Link to='/login' className="nav-link-login">Login</Link>
          </button>

        <button className="signup-btn">
          <Link to="/signup" className="nav-link-signup">Sign Up</Link>
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
