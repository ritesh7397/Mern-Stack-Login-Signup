import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h1>
            <span className="logo-bold">NEXUS</span> VENTURES
          </h1>
          <p className="footer-tagline">POWER AND SUCCESS INSPIRED LIFE</p>
          <p className="footer-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Important Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Terms Section */}
        <div className="footer-terms">
          <h3>Terms & Conditions</h3>
          <ul>
            <li>Contact Support</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-socials">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-skype"></i>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <hr />
        <p>Copyright &copy; 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
