
// =============================
// src/components/Footer.jsx
// =============================

import React from "react";
import '../../styles/main.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>Contact</h4>
          <p>Email: info@renoco.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Renovation St., Cityville</p>
        </div>
        <div className="footer__section">
          <h4>Services</h4>
          <p>Demolition & Cleanup</p>
          <p>Flooring</p>
          <p>Drywall</p>
          <p>Paint & Finishing</p>
          <p>Garage & Basement</p>
          <p>Lighting & Doors</p>
        </div>
        <div className="footer__section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} RenoCo. All rights reserved.
      </div>
    </footer>
  );
}